const router = require("express").Router();
const Shop = require("../../controllers/shopController");

// Shop routes
router.route("/")
  .get(Shop.findAll)
  .post(Shop.create);

router
  .route("/:id")
  .get(Shop.findById)
  .put(Shop.update)
  .delete(Shop.remove);

module.exports = router;