const router = require("express").Router();
const medController = require("../../controllers/medController");

// Matches with "/api/med"
router.route("/")
  .get(medController.findAll)
  .post(medController.create);

// Matches with "/api/med/:id"
router
  .route("/:id")
  .get(medController.findById)
  .put(medController.update)
  .delete(medController.remove);

module.exports = router;