const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    email: { type: String },
    coins: { type: Number },

    personalDetails: [{
        name: { type: String },
        mobile: { type: String },
        profilePic: { type: String },
        linkedInLink: { type: String },
        gitHubLink: { type: String },
        resume: { type: String },
    }],

    educationDetails: [{
        educationType: { type: String },
        collageName: { type: String },
        startDate: { type: String },
        endDate: { type: String },
    }],

    projectDetails: [{
        projectName: { type: String },
        ProjectDescription: { type: String },
        ProjectType: { type: String },
        ProjectLink: { type: String },
    }],

    pastExperience: [{
        experienceType: { type: String },
        companyName: { type: String },
        companyWebsitelink: { type: String },
        role: { type: String },
        startDate: { type: String },
        endDate: { type: String },
        coverletter: { type: String },
    }],
    jobApplied: [{
        roleName: {type:String},
        companyName: {type:String},
        location: {type:String},
        stippend: {type:String},
        posted: {type:String},
        experience: {type:Number},
        
      }],

 
});

module.exports = mongoose.model('Profile', Profile );