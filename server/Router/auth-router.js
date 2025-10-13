const express =require("express");
const router = express.Router();

router.get("/",(req,res)=> {
    res.status(200).send("Welcome to Home page Router");
});

router.route("/register").get((req,res)=> {
    res.status(200).send("Welcome to Registration Page Router");
});


module.exports= router;