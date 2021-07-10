const router = require("express").Router();
const userRoutes = require("./user");
const productRoutes = require("./product");

// Med routes
router.use("/users", userRoutes);
router.use("/product", productRoutes);

module.exports = router;