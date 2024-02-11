const mongoose = require("mongoose");

const connect = async () => {
  // const mongodburl = config.get("mongodburl");
  const mongodburl = "mongodb+srv://fastfood:fastfood123@cluster0.cpbc4ky.mongodb.net/job?retryWrites=true&w=majority";
  console.log(mongodburl)

  return await mongoose.connect(mongodburl)
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
      console.log("db error:", error.message);
      process.exit(1);
    });
};

module.exports = connect;