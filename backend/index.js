const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const connect  = require('./src/db/connect') ;
const Authrouter = require('./src/router/Auth_Router');
const JobsRoute = require('./src/router/All_Jobs');
const Profrouter = require('./src/router/profile_Router')

// Create an Express application
const app = express();

// Configure middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://linked-mu.vercel.app");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });


// Configure nodemailer with your email service credentials
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail'
    auth: {
        user: 'harshanand029@gmail.com',
        pass: 'hacn trwi waxo lqee'
    }
});

// Generate random OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}

app.use('/auth', Authrouter);
app.use('/jobs',JobsRoute);
app.use('/profile',Profrouter);
// Handle POST request to send OTP


// app.get('/send-otp', (req, res) => {
//     const email = req.body.email;

//     // Generate OTP
//     const otp = generateOTP();
//     otpData = {...otpData, email : otp}

//     // Compose email message
//     const mailOptions = {
//         from: 'harshanand029@gmail.com',
//         to: email,
//         subject: 'Your One Time Password (OTP)',
//         text: `Your OTP is: ${otp}`
//     };

//     // Send email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error(error);
//             res.status(500).send('Failed to send OTP');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200).send('OTP sent successfully');
//         }
//     });
// });

// app.post('/validate-otp', (req, res) => {
//     const { email, otp } = req.body;
//     // email = "deepaksaini63871@gmail.com"
//     // otp = "522169"
//     // Check if OTP is valid
//     if (email && otp) {
//         // Here, you should have a mechanism to store the OTP temporarily,
//         // such as in a database or in-memory data structure (e.g., object)
//         // For demonstration purposes, I'll just assume you have stored it in an object

//         // Retrieve the OTP for the provided email address
//         const storedOTP = otpData[email];
//         console.log(storedOTP)
//         if (storedOTP && storedOTP === parseInt(otp)) {
//             // OTP is valid
//             res.status(200).send('OTP is valid');
//             // Optionally, you may want to clear the stored OTP to prevent further use
//             delete otpData[email];
//         } else {
//             // OTP is invalid
//             res.status(400).send('Invalid OTP');
//         }
//     } else {
//         res.status(400).send('Missing email or OTP');
//     }
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connect()
});