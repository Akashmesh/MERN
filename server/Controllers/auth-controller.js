//home page 
const User = require("../models/user-model");
const home = async(req,res)=> {
    try {
        res.status(200).send("Welcome to Home Page- from controller");
    }catch(error) {
        console.log(error);
    }
};

//registration 

const register = async(req,res)=> {
    try {
        console.log(req.body);
        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({email});
        if (userExist) {
            return res.status(400).json({msg : "email already exists"});
        }
        const userCreated = await User.create({username, email,phone, password});
        res.status(200).json({msg : userCreated});
    }catch(error) {
        res.status(500).send({msg : "internal server error"});
    }
}

module.exports= {home, register};