const  Router=require("express");
const Authrouter =Router();
const { createOtp, validateOtp } = require("../controller/AuthController");

Authrouter.post('/send-otp',createOtp)
Authrouter.post('/validate-otp',validateOtp)

module.exports = Authrouter;    