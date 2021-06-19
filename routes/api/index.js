const router = require("express").Router();
const medRoutes = require("./med");

// Book routes
router.use("/med", medRoutes);

module.exports = router;