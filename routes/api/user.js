const router = require('express').Router();
const userController = require("../../controllers/userController");

// api/users
router.route("/").post(userController.create);

// api/users/login
router.route("/login").post(userController.login);

// api/users/logout
router.route("/logout").post(userController.logout);

module.exports = router;
