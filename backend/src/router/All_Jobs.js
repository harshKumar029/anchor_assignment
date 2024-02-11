const  Router=require("express");
const JobsRouter =Router();
const { getJobs } = require("../controller/GetJobs");

JobsRouter.get('/allJobs',getJobs)


module.exports = JobsRouter;    