const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/mern_admin";

const connectDb = async ()=> {
    try {
        await mongoose.connect(URI);
        console.log("Connection successfull to DB");
    }catch(error) {
        console.log("Database Connection Failed");
        process.exit(0);
    }
}
module.exports = connectDb;