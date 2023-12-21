const express = require('express');
const app = express();
//library to unionize the path between different OS
const path = require('path');

// allow server to read json data from the request body from the client 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    // __dirname, folder and file
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.use('/api', (req, res, next) => {
    console.log("This is a middleware within /api");
    // pass req and res 
    next();
})

app.get('/api/intro', (req,res) => {
    res.status(200).json({
        name: "Juan Apolo",
        univeristy: "Universidad del Azuay",
        major: "Computer Science",
    })
})

app.get('/api/experience', (req, res) => {
    res.status(200).json({
        company: "Google",
        position: "Software Engineer",
        duration: "2020 - Present",
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});