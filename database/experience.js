const { Schema, model } = require('mongoose');

const ExperienceSchema = new Schema(
    {company: String, title: String, duration: String},
    {collection: "experiences"}
);

module.exports = {
    // model contains all methods to interact with db
    Experiences: model("experiences", ExperienceSchema),
};