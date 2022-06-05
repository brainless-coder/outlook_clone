const express = require("express");
const router = express.Router();
const { userSchema, emailSchema, validateUser } = require('../middlewares/validations/userValidation');
const UserController = require('../controllers/user.controller');

// Create routes for user here
router.post('/', userSchema, validateUser, UserController.createUser);
router.get('/:email', emailSchema, validateUser, UserController.getUser);

module.exports = router;