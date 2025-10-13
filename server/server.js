const express = require("express");
const app = express();


app.get("/",(req,res)=> {
    res.status(200).send("welcome to home page");
})
app.get("/register",(req,res)=> {
    res.status(200).send("welcome to registration page");
})
const port = 5000;
app.listen(port, ()=> {
    console.log(`listening on port : ${port}`);
});