const router = require("express").Router();
const medRoutes = require("./api");
const userRoutes = require("./user");
const productRoutes = require("./product");

// Med routes
router.use("/api", medRoutes);
router.use("/users", userRoutes);
router.use("/product", productRoutes);

module.exports = router;