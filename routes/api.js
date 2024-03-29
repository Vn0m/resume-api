const express = require("express");
const router = express.Router();
const Experiences = require("../database/experience");

var experiences = [];

router.use('/', (req, res, next) => {
    console.log("Api request received");
    // pass req and res 
    next();
})

router.get('/intro', (req,res) => {
    res.status(200).json({
        name: "Juan Apolo",
        univeristy: "Universidad del Azuay",
        major: "Computer Science",
    })
});

router.get('experiences', async(req,res) => {
  await Experiences.find({})
  .then((experiences) => res.status(200).json({message: experiences, ok: true}))
  .catch((err) => res.status(500).json({ message: err, ok: false}));
})

router.put("/:id", (req, res) => {
    const expIndex = parseInt(req.params.id);
    if (expIndex >= 0 && expIndex < experiences.length) {
      // Update the experience at the found index
      experiences[expIndex] = { ...experiences[expIndex], ...req.body };
      res.status(200).json({ message: "Experiences updated successfully" });
    } else {
      res.status(404).json({ message: "Experiences not found" });
    }
  });
  
  router.delete("/:id", (req, res) => {
    const expIndex = parseInt(req.params.id);
  
    if (expIndex >= 0 && expIndex < experiences.length) {
      // Delete the experience at the found index
      // delete one element at the  expIndex
      experiences.splice(expIndex, 1);
      res.status(200).json({ message: "Experience deleted successfully" });
    } else {
      res.status(404).json({ message: "Experience not found" });
    }
  });

router.post('/experience', (req, res) => {
    const newExperience = req.body;
    experiences.push(newExperience);
    res.status(201).json({message: "New job was added"});
});

module.exports = router;