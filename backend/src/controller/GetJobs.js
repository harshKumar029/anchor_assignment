const AllJobs = require("../model/allJobs")

const getJobs = async (req, res) => {
    try {;
        const UserData = await AllJobs.find({});
        console.log(UserData)
        res.status(200).json(UserData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = {getJobs};