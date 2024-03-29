const express = require('express');
const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const app = express();
const morgan = require("morgan")

app.use(cors());
app.use(express.json());
app.use(morgan("common"))

const userRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const ordersRoute = require("./routes/orders");

app.use("/api/products", productsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/users", userRoute);

// const mongoUrl = 'mongodb://localhost:27017'
const mongoUrl = 'mongodb+srv://aminaaslam985:amina123@cluster0.w7bvzq1.mongodb.net/feetwear-paradise'


mongoose.connect(mongoUrl).then(() => console.log('MongoDb connected')).catch((err) => console.log(err))
app.listen("8070", () => {
    console.log('backend server is running');
});
