const router = require('express').Router();
const { body } = require('express-validator')
const AdminUserController = require('./controller')
const { validator } = require('../middleWares');



router.post('/register', [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid Email Address'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required'),
    body('firstName')
        .not()
        .isEmpty()
        .withMessage('First Name is required'),
    body('lastName')
        .not()
        .isEmpty()
        .withMessage('Last Name is required')
], validator, AdminUserController.register)


router.post('/', [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid Email Address'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
], validator, AdminUserController.login)

module.exports = router
