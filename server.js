const express = require("express");
const connectDB = require("./config/db");
const app = express();
const cors = require('cors')
const issue2options = {
  origin: '*',
  allowedHeaders:
    'x-access-token, Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Length,token',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
  credentials: true,
}
app.use(cors({ ...issue2options }))
const path = require("path");
const dotenv=require('dotenv');
const user=require('./controller/User');
const bodyParser = require('body-parser')
//connect dabase
connectDB();

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use("/api/users", user);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get(
    "*",
    (req,
    (res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
  );
}
dotenv.config({path:'./config/config.env'})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on the port ${PORT}`));