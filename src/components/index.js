const express = require("express");
const router = express.Router();
const UserRouter = require("./Users/router")
const PetRouter = require("./Pets/router");

router.get('/', (req, res, next) => {
    res.send('Hello Wagging Tales');
})

router.use("/login",UserRouter)
router.use("/user",UserRouter)
router.use("/pet",PetRouter)



module.exports = router;