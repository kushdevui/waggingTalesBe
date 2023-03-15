const router = require('express').Router();
const { body } = require('express-validator')
const { validator } = require('../middleWares');
const PetController = require('./controller')

router.post('/', [
    body('name')
        .not()
        .isEmpty()
        .withMessage('Pet Name is Required'),
    body('ownerName')
        .not()
        .isEmpty()
        .withMessage('Pet Owner name is required'),
    body('reasonForAdmit')
        .not()
        .isEmpty()
        .isArray({min:1})
        .withMessage('One reason is mendetory'),
    body('photo')
        .not()
        .isEmpty()
        .withMessage('Photo is required'),
    body('sterlizationStatus')
        .not()
        .isEmpty()
        .isBoolean()
        .withMessage("Please select sterlization"),
    body('dateOfAdmission')
        .not()
        .isEmpty()
        .withMessage("Date of admision is required"),
    body('age')
        .not()
        .isEmpty()
        .isNumeric()
        .withMessage("Pet age is required"),
    body('remarks')
        .not()
        .isEmpty()
        .withMessage("basic remarks is required")
], validator, PetController.insert)
router.patch("/:id",PetController.update);
router.get("/",PetController.getAll);
router.delete("/:id",PetController.delete)
module.exports = router;
