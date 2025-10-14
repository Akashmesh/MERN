const express =require("express");
const router = express.Router();

const authcontrollers= require("../Controllers/auth-controller");

router.route("/").get(authcontrollers.home);
router.route("/register").get(authcontrollers.register);

module.exports= router;