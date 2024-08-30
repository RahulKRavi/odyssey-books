const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')
const adminRoute = require('./routes/adminRoute')
require('dotenv').config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.URI);
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}
connectDB();

const app = express();
app.use('/',userRoute);
app.use('/admin',adminRoute)

app.listen(3000,async function (params) {
    console.log("Sever is started at port 3000")
})
