const router = require("express").Router();
const Shop = require("../../models/Shop");

// Shop routes
router.route("/")
  .get(medController.findAll)
  .post(medController.create);

module.exports = router;