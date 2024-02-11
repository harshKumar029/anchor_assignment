const mongoose = require('mongoose');

const ProjectDetails = new mongoose.Schema({
  projectName: { type: String },
  ProjectDescription: {type:String},
  ProjectType: {type:String},
  ProjectLink : {type:String}, 
});

module.exports = mongoose.model('ProjectDetails', ProjectDetails);