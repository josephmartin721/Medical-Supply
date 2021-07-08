const router = require("express").Router();
const medRoutes = require("./api");
const userRoutes = require("./user");
const Product = require("../../models/Product");

// Med routes
router.use("/api", medRoutes);
router.use("/users", userRoutes);
router.use("/product", Product);

module.exports = router;