const mongoose = require('mongoose');

const AllJobs = new mongoose.Schema({
  
    RoleName: {type:String},
    CompanyName: {type:String},
    Location: {type:String},
    Stippend: {type:String},
    Posted: {type:String},
    experience: {type:Number},
});

module.exports = mongoose.model('AllJobs', AllJobs, 'job-Items');