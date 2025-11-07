const bcrypt = require("bcryptjs");

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
            return res.status(400).json({message : "email already exists"});
        }
        const userCreated = await User.create({username, email,phone, password});
        res.status(201).json({msg : "Registration Successfull",token : await userCreated.generateToken(), userId : userCreated._id.toString()});
    }catch(error) {
        res.status(500).send({msg : "internal server error"});
    }
}


//login 

const login = async (req, res) => {
    try {
        const {email, password}= req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
        if(!userExist) {
            return res.status(400).json({message : "Invalid Credentials"});
        }
        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);
        if(user) {
            res.status(200).json({
                msg : "login successful",
                token : await userExist.generateToken(),
                userId : userExist._id.toString(),
            });
        }else {
            res.status(401).json({message : "Invalid Email or password"});
        }
        
    } catch (error) {
        res.status(500).json("internal server error");
    }
};


// to send user data - user logic
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log(`Error from user route ${error}`);
    }
}
module.exports= {home, register, login, user};