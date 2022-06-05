const Users = require('../models/User');
const User = require('../models/MongoUser');

const createUser = async (req, res) => {
    //createUser api logic here
    const { name, password, phoneNo, email, age, gender } = req.body;
    const doesEmailExist = await User.findOne({email});
    if (doesEmailExist) {
        return res.status(409).json({ 
            message: "Email ID already exists please provide another email ID" 
        });
    }
    const currUser = new User({ name, password, phoneNo, email, age, gender });
    try {
        const newUser = await currUser.save();
        return res.status(201).json({
            messge: "User Email ID Created Successfully"
        });
    } catch (err) {
        return res.send(err);
    }
};

const getUser = async (req, res) => {
    //getUser api logic here
    const { email } = req.params;
    const currUser = await User.find({ email });
    if (currUser.length == 0) {
        return res.status(404).json({message: "No users found for the given email ID"});
    }
    return res.status(200).json(currUser);
};

const sendMail = (req, res) => {
    //sendMail api logic here
};

const getUserInbox = (req, res) => {
    //getUserInbox api logic here
};

const getUserOutbox = (req, res) => {
    //getUserOutbox api logic here
};

const searchMail = (req, res) => {
    //searchMail api logic here
};

const blockUser = (req, res) => {
    //blockUser api logic here
};

const deleteMail = (req, res) => {
    //deleteMail api logic here
};

const UserController = {
    createUser,
    getUser,
    sendMail,
    getUserInbox,
    getUserOutbox,
    searchMail,
    blockUser,
    deleteMail
};

module.exports = UserController;