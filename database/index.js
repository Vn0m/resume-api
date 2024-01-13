const mongoose = require('mongoose');

// Connect to MongoDB
function connectDB(){
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("Connected to db"))
        .catch((err) => console.log(err));
}

module.exports = connectDB;