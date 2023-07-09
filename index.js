const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;
require("dotenv").config();

const bodyParser = require("body-parser");
const orderRoute = require("./routes/order")

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,});
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

// mongoose.connect(process.env.DATABASE, {
//     useNewUrlParser: true,
// }).then(()=>{
//     console.log("Connected to the database");
// }).catch(()=>{
//     console.log("Failed to connect to the database");
// })

app.use(bodyParser.json());
app.use(cors())
app.use("/api", orderRoute);

// app.get("/", (req, res)=>{
//   res.send("App is working");
// })

// app.listen(port, ()=>{
//     console.log(`Listening on ${port}`)
// })


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
