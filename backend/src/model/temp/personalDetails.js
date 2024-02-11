const mongoose = require('mongoose');

const PersonalDetails = new mongoose.Schema({
  name: { type: String },
  mobile: {type:String},
  profilePic: {type:String},
  linkedInLink : {type:String}, 
  gitHubLink : {type:String}, 
  resume : {type:String}, 
});

module.exports = mongoose.model('PersonalDetails', PersonalDetails);