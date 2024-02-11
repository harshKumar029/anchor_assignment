const mongoose = require('mongoose');

const EducationDetails = new mongoose.Schema({
    educationType: { type: String },
    collageName: {type:String},
    startDate: {type:String},
    endDate : {type:String}, 
});

module.exports = mongoose.model('EducationDetails', EducationDetails);