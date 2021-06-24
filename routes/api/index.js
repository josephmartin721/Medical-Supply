const router = require("express").Router();
const medRoutes = require("./api");

// Med routes
router.use("/api", medRoutes);

module.exports = router;