const router = require('express').Router();
const { body } = require('express-validator')
const { validator } = require('../middleWares');
const StatusController = require("./controller")


router.post("/",[
    body('name')
    .not()
    .isEmpty()
    .withMessage('Status title is required'),
    body('description')
    .not()
    .isEmpty()
    .withMessage('Status description is required'),
],StatusController.create);

router.get("/",validator,StatusController.get)

module.exports = router;
