require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Start Here" });
// });

const PORT = process.env.PORT || 8080; // port at which server listening


// fetch routes
let userRouter = require('./routes/user');
let authRouter = require('./routes/auth');

// Code for DB connection
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

//define routes.
app.use('/user', userRouter);
app.use('/auth', authRouter);


app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);


