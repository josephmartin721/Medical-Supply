const router = require("express").Router();
const bookRoutes = require("./med");

// Book routes
router.use("/med", medRoutes);

module.exports = router;