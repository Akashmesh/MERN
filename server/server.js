const express = require("express");
const app = express();
const router = require("./Router/auth-router");
const connectDb = require("./utils/db");

//addding express middleware
app.use(express.json());

//mounting the router to use in express app
app.use("/api/auth", router);

const port= 5000;
connectDb().then(()=> {
app.listen(port,()=> {
    console.log(`listening on port : ${port}`);
});
});