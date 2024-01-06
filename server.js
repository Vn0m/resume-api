const express = require('express');
const app = express();
//library to unionize the path between different OS
const path = require('path');
const apiRouter = require('./routes/api');
const mongoose = require('mongoose');

require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


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