const express = require('express');
const { body } = require('express-validator');
const captionController = require('../controllers/caption.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const captionRouter = express.Router();

captionRouter.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
],
    captionController.registerCaption
);

captionRouter.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
],
    captionController.loginCaption
);

captionRouter.get("/profile", authMiddleware.authCaption, captionController.getCaptionProfile);
captionRouter.get("/logout", authMiddleware.authCaption, captionController.logoutCaption);

module.exports = captionRouter;