const express = require("express");
require("dotenv").config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const userRoute = require('./routes/auth.route');
const listRoute = require('./routes/list.route');
const connectToDatabase = require("./database/db");
connectToDatabase();

const app = express();

// Rate limiter for login/signup
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests per IP
  message: { message: "Too many login attempts. Try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});


// Apply only to /signin (and optionally /signup)
app.use('/api/v1/signin', authLimiter);
app.use('/api/v1/signup', authLimiter);

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true 
}));



app.use(express.json());

app.use(cookieParser());

app.use('/api/v1',userRoute);
app.use('/api/v2',listRoute);

const port = process.env.PORT;


app.listen(port, () => {
  console.log(`listening at ${port}`);
});
