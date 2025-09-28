const express = require('express');
const userRouter = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');

userRouter.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long')
],
    userController.registerUser
);

userRouter.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long')
],
    userController.loginUser
);

module.exports = userRouter;