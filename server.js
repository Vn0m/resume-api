const express = require('express');
const app = express();
//library to unionize the path between different OS
const path = require('path');
const apiRouter = require('./routes/api');

// allow server to read json data from the request body from the client 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    // __dirname, folder and file
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/api", apiRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});