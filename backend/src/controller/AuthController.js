const login =  require('../model/login')
const nodemailer = require('nodemailer');

// let otpData = {};
global.otpData = {};
console.log(otpData);

const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
        user: 'harshanand029@gmail.com',
        pass: 'hacn trwi waxo lqee'
    }
});
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}


const createOtp = async (req, res) => {
    const email = req.body.email;
    console.log("jccccg",email)
    // Generate OTP
    const otp = generateOTP();
    otpData = {...otpData, [email]:otp}
    console.log(otpData)

    const mailOptions = {
        from: 'harshanand029@gmail.com',
        to: email,
        subject: 'Your One Time Password (OTP)',
        text: `Your OTP is: ${otp}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Failed to send OTP');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('OTP sent successfully');
        }
    });
};

const validateOtp = async (req, res) => {
    const { email, otp } = req.body;
    console.log("jccccg",email)
    // email = "deepaksaini63871@gmail.com"
    // otp = "522169"
    if (email && otp) {
        const storedOTP = otpData[email];
        console.log(storedOTP)
        if (storedOTP && storedOTP === parseInt(otp)) {
            // OTP is valid
            const newlogin = new login({ userEmail : email});
            await newlogin.save();
            // res.status(200).send('OTP is valid');
            res.status(200).json({status: 'success',email:email});
            delete otpData[email];
        } else {
            // OTP is invalid
            res.status(400).send('Invalid OTP');
        }
    } else {
        res.status(400).send('Missing email or OTP');
    }
};

module.exports = { createOtp, validateOtp };