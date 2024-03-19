const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ProductRoute = require("./routes/ProductRoute.js");

const app = express();
mongoose.connect('mongodb+srv://mchihuynhwork:IFvTIZuaCikqTomR@cluster0.qjz1e7m.mongodb.net/')
.then(() => {
  console.log("Connected to database!");
}).catch(err => {
  console.log("Connection failed: " + err);
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


app.use("/api/v1/products", ProductRoute);

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});