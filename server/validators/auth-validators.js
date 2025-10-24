const {z} = require("zod");

const signupSchema = z.object({
    username : z.
    string({required_error : "name is requried"}).trim()
    .min(3,{message :"name must be atleast 3 characters long"})
    .max(255,{message : "name must not be more than 255 characters"}),
       email : z.
    string({required_error : "email is requried"}).trim()
    .min(3,{message :"email must be atleast 3 characters long"})
    .max(255,{message : "email must not be more than 255 characters"}),   
    phone : z.
    string({required_error : "phone number is requried"}).trim()
    .min(3,{message :"phone number must be atleast 3  long"})
    .max(255,{message : "phone number must not be more than 255 characters"}),   
    password : z.
    string({required_error : "password is requried"})
    .min(6,{message :"password must be atleast 6 characters long"})
    .max(1024,{message : "password must not be more than 1024 characters"}),
});

module.exports= signupSchema;