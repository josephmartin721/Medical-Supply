const router = require("express").Router();
const medRoutes = require("./med");

// Med routes
router.use("/med", medRoutes);

module.exports = router;