const mongoose = require('mongoose');

const JobApplied = new mongoose.Schema({
  email: { type: String},
  jobApplied: [{
    roleName: {type:String},
    companyName: {type:String},
    location: {type:String},
    stippend: {type:String},
    posted: {type:String},
    experience: {type:Number},
    
  }]
});

module.exports = mongoose.model('JobApplied', JobApplied);