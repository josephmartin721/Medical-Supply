const router = require("express").Router();
// const medRoutes = require("./api");
const userRoutes = require("./user");

// Med routes
// router.use("/api", medRoutes);

router.use("/users", userRoutes);

module.exports = router;