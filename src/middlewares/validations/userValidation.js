const { check, body, validationResult, matchedData   } = require('express-validator');

// Schema for validating the user
const userSchema = [
  body('name').exists().isLength({min:3, max: 20}).withMessage({
    message: 'Name must be of 3-20 characters long',
    errorCode: 400
  })
  .matches(/^[A-Za-z\s]+$/).withMessage({
    message: 'Name must be alphabetic',
    errorCode: 400
  }),
  body('password').exists().isLength({min: 3, max: 10}).withMessage({
    message: 'Password must be between 3-10 characters long',
    errorCode: 400
  }).isAlphanumeric().withMessage({
    message: 'Password must be alphanumeric',
    errorCode: 400
  }),
  body('phoneNo').exists().isLength({min: 10, max: 10}).withMessage({
    message: 'Phone Number must be of exactly 10 digits',
    errorCode: 400
  }),
  body('email').exists().isEmail().withMessage({
    message: 'Not a valid Email ID',
    errorCode: 400
  }),
  body('age').exists().isNumeric({min: 10, max: 99}).withMessage({
    message: 'Age should be between 10-99 years',
    errorCode: 400
  }),
  body('gender').exists().isIn(['Male', 'Female'])
];

const emailSchema = [
  check('email', 'Not a valid Email ID').isEmail()
]

// Function to validate the User
const validateUser = (req, res, next) => {
  // console.log(matchedData(req));
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      message: "User inputs are invalid", 
      errors: errors.array() 
    });
  }
  next();
}


module.exports = {
  userSchema, emailSchema, validateUser
}