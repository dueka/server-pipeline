const { Router } = require("express");
const candidatesRoutes = require('./candidates')
const router = Router();

router.use("/candidates", candidatesRoutes)

module.exports = router;