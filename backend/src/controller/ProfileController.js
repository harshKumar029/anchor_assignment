const Profile = require("../model/profile")
const Login = require("../model/login")

const getProfile = async (req, res) => {
    try {
        const { email} = req.body;
        const UserData = await  Profile.find({ email: email })
        console.log(UserData)

        res.status(200).json(UserData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



const postProfile = async (req,res) => {
    try {
        const { email } = req.body;
        const Profiledata = req.body;
        const existinguser = await Login.findOne({ userEmail : email });
        if (!existinguser) {
            return res.status(400).json({ message: 'User does not exist Create your account' });
        }

        const newurl = await Profile.findOneAndUpdate(
            { userEmail: email },
            { $push: Profiledata },
        );
        if (newurl) {
            res.status(200).json({ status: 'success', message: 'URL added/updated for the user.' });
        } else {
            const newUserDocument = new Profile(Profiledata);
            await newUserDocument.save();
            res.status(201).json({ status: 'success', message: 'New user document created with URL.' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
}
module.exports = {getProfile ,postProfile};