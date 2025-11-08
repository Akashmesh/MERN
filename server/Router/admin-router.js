const express = require("express");
const adminController = require("../Controllers/admin-controller");
const router = express.Router();

router.route("/users").get(adminController.getAllUsers);
router.route("/contacts").get(adminController.getAllContacts);

module.exports = router;