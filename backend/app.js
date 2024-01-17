const express = require("express");
const mongoose =require("mongoose");
const cors=require ("cors");
const bodyParser = require("body-parser");
const app= express();

const bookRoute=require("./routes/booksRoutes")
const connectDB=require("./connection/conn");
connectDB();
app.use(cors());
app.use(express.json())
app.use("/api/v1",bookRoute);

  // app.get("/services", (req, res) => {
  //   res.send("Hello, Welcome to services");
  // });
  
  // More routes and middleware can be added here...
  
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  

