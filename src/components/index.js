const express = require("express");
const router = express.Router();
const UserRouter = require("./Users/router")

router.get('/', (req, res, next) => {
    res.send('Hello Wagging Tales');
})

router.use("/login",UserRouter)
router.use("/user",UserRouter)



module.exports = router;