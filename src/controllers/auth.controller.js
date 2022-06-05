const User = require("../models/MongoUser");

const login = async (req, res) => {
    //login api logic here
    const { email, password } = req.body;
    // Check if the email already exist
    const currUser = await User.findOne({ email });
    if (!currUser) {
        return res.status(404).json({message: "User does not exist"});
    }
    // Check if the credentials are correct
    const isCredentialsCorrect = currUser.password === password ? true : false;
    if (!isCredentialsCorrect) {
        return res.status(401).json({message: "Invalid Password"});
    }
    return res.status(200).json({
        messge: "You are successfully logged in"
    });
};


const AuthController = {
    login
};

module.exports = AuthController;