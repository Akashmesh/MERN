require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./Router/auth-router");
const contactRoute = require("./Router/contact-router");
const serviceRoute = require("./Router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin : "http://localhost:5173",
    methods :"GET,POST,PUT,DELETE,PATCH,HEAD",
    Credentials : true,
};
app.use(cors(corsOptions))
//addding express middleware
app.use(express.json());

//mounting the router to use in express app
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);



app.use(errorMiddleware);

const port= 5000;
connectDb().then(()=> {
app.listen(port,()=> {
    console.log(`listening on port : ${port}`);
});
});