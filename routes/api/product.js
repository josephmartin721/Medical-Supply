const router = require("express").Router();
const Product = require("../../models/Product");

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