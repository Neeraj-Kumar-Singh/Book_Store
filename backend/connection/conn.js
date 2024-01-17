// const mongoose= require("mongoose");

// uri="mongodb+srv://canvafornftevent:abc@123@cluster0.0elvvzk.mongodb.net/bookstore?retryWrites=true&w=majority";
// // mongoose.connect("mongodb+srv://neerajkumarsingh620:Mongodb@2024@cluster0.xfkfk8u.mongodb.net/crudop?retryWrites=true&w=majority")
// // .then(()=>console.log("connected"));
// const connectDB= ()=>{
    
//     mongoose.connect(uri).then(()=>
//     console.log("connected db"));
    
// }
// module.exports =connectDB;

// connection/conn.js

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://canvafornftevent:Mongodb2024@cluster0.nppsafx.mongodb.net/?retryWrites=true&w=majority", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDB;
