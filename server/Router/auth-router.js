const express =require("express");
const router = express.Router();

const authcontrollers= require("../Controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validators/auth-validators");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/login").post(validate(loginSchema),authcontrollers.login);


module.exports= router;