const router = require("express").Router();
const medRoutes = require("./api");
const userRoutes = require("./user");
const Product = require("../../models/Product");

// Med routes
router.use("/api", medRoutes);
router.use("/users", userRoutes);
router.use("/product", Product);

// Product routes
router.route("/")
  .get(Product.findAll)
  .post(Product.create);

// api/products/id
  router
  .route("/:id")
  .get(Product.findById)
  .put(Product.update)
  .delete(Product.remove);

module.exports = router;