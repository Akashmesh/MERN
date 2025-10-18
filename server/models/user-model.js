const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({username : {
    type : String,
    required : true,
},
email : {
    type :String,
    required : true,
},
phone : {
    type : String ,
     required : true,
},
password :  {
    type : String,
    require : true,
},
isAdmin : {
    type :Boolean,
    default : false,
},
});


//sucuring password with bcrypt
userSchema.pre("save", async function(next) {
    const user = this;
    if(!user.isModified("password")) {
        next();
    }try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    
    }catch(error) {
        next(error);
    }
});


const User = new mongoose.model("User", userSchema);

module.exports = User;