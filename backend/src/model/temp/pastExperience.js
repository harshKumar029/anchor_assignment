const mongoose = require('mongoose');

const PastExperience = new mongoose.Schema({
    ExperienceType: { type: String },
    companyName: {type:String},
    companyWebsitelink: {type:String},
    role : {type:String},
    startDate : {type:String},
    endDate : {type:String},
    coverletter : {type:String},
    
});

module.exports = mongoose.model('PastExperience', PastExperience);