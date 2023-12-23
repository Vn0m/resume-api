const express = require("express");
const router = express.Router();

var experiences = [];

router.use('/', (req, res, next) => {
    console.log("This is a middleware within /api");
    // pass req and res 
    next();
})

router.get('/intro', (req,res) => {
    res.status(200).json({
        name: "Juan Apolo",
        univeristy: "Universidad del Azuay",
        major: "Computer Science",
    })
})

router.get('/experience', (req, res) => {
    res.status(200).json(experiences);
});

router.post('/experience', (req, res) => {
    const newExperience = req.body;
    experiences.push(newExperience);
    res.status(201).json({message: "New job was added"});
});

module.exports = router;