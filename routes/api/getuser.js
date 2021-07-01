const router = require("express").Router();
const User = require("../../models/User");

// User routes
router.route("/")
  .get(User.findAll)
  .post(User.create);

router
  .route("/:id")
  .get(User.findById)
  .put(User.update)
  .delete(User.remove);

module.exports = router;