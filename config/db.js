const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB connnected..");
  } catch (err) {
    console.error(err.message);
    //exit the process with failer
    process.exit(1);
  }
};

module.exports = connectDB;
