const express = require('express');
const app = express();
//library to unionize the path between different OS
const path = require('path');
const connectDB = require("./database");
const apiRouter = require('./routes/api');

require("dotenv").config();

// call on server.js for enviroment variable
connectDB.call(this);

app.use(express.urlencoded({extended: true}));
// allow server to read json data from the request body from the client 
app.use(express.json());

app.get('/', (_, res) =>{
    // __dirname, folder and file
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});