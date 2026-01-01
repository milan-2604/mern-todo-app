const express = require("express");
require("dotenv").config();
const userRoute = require('./routes/auth.route');
const listRoute = require('./routes/list.route');
const connectToDatabase = require("./database/db");
connectToDatabase();

const app = express();

app.use(express.json());

app.use('/api/v1',userRoute);
app.use('/api/v2',listRoute);

const port = process.env.PORT;


app.listen(port, () => {
  console.log(`listening at ${port}`);
});
