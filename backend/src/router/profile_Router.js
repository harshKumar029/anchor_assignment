const  Router=require("express");
const Profrouter =Router();
const { getProfile ,postProfile } = require("../controller/ProfileController");

Profrouter.get('/get-items',getProfile)
Profrouter.post('/create-items',postProfile)

module.exports = Profrouter;  