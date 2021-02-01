const mongoose = require("mongoose");
require("dotenv").config();
// connection to database
const connection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("successfully connected to MongoDB");
    }   catch (error){
        console.log(error);
    }
};

connection();

// connect with node src/db/connection.js