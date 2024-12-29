const express = require("express");
const feedbackRoute = require("./routes/feedbackRoutes");
require("dotenv").config();
require("./dbConnect/dbConnect");
const cors=require('cors');

const app = express();
app.use(cors());
app.use("/", feedbackRoute);

app.listen(process.env.port, () => {
  console.log(`Server is running on ${process.env.port}`);
});
