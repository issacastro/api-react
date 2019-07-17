"use strict";

var _express = require("express");

var _UserController = require("../controllers/UserController");

var router = (0, _express.Router)();
router.route("/").get(_UserController.getUsers).post(_UserController.createUser);
router.route("/:id").get(_UserController.getUser).put(_UserController.updateUser)["delete"](_UserController.deleteUser);
module.exports = router;
//# sourceMappingURL=users.js.map