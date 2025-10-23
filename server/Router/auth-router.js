const express =require("express");
const router = express.Router();

const authcontrollers= require("../Controllers/auth-controller");

router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
router.route("/login").post(authcontrollers.login);


module.exports= router;