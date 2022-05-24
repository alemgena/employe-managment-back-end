const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  birthDate: {
    type: Date,
    default: Date.now,
  },
  gender:{
    type:String,

  },
  salary: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);

// for my project
// const citySchema = new mongoose.Schema({
//   name: String,
//   location: {
//     usereId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//     },
//     type: {
//       type: String, // Don't do `{ location: { type: String } }`
//       enum: ["Point"], // 'location.type' must be 'Point'
//       required: true,
//     },
//     coordinates: {
//       type: [Number],
//       required: true,
//     },
//     socketId: "jasdhfjh2423232",
//   },
// });

// const location
// {
//   "_id":{
//     "$old":"afskdjfwew4232342k2j32b3"
//   },
//   "driverId":"32456dfg8s9df89g7",
//   "coordinate":{
//     "type":"point",
//     "coordinates":[
//       1010.8888,  //logtiude
//       2.3232 //latitude
//     ]
//   },
//   "socketId":"jasdhfjh2423232"
// }

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,

//     unique: true,
//   },
//   phonenumber: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   avatar: {
//     type: String,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });