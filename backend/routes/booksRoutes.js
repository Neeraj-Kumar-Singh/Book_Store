const router =require("express").Router();
const booksmodel = require("../models/booksmodel");
const bookModel=require("../models/booksmodel");

//post request 
router.post("/add",async(req,res)=>{
try{
  const data=req.body;
  const newBook=new bookModel(data);
  await newBook.save().then(()=>{
    res.status(200).json({message:"Book added succefully"}); 
  })
}
catch(error){
    console.log(error);
}
});

//get request
router.get("/getBooks", async(req,res)=>{
  let books;
  try{
    books=await bookModel.find();
    res.status(200).json({books})

  }
  catch(errror){
    console.log(error);
  }
})

//get request with id
router.get("/getBooks/:id", async(req,res)=>{
  let book;
  const id=req.params.id;

  try{
    book=await bookModel.findById(id);
    res.status(200).json({book});
  }
  catch(error){
    console.log(error)
  }
})

//update book by id

router.put("/updateBook/:id", async(req,res)=>{
 const id=req.params.id;
 const {bookname,author,description,price,image}=req.body;
 let book;

  try{
    book= await bookModel.findByIdAndUpdate(id,{
      bookname,author,description,price,image,
    });
    book=await book.save().then(()=>{
      res.json({message:"data updated"})
    })
  }
  catch(error){
    console.log(error)
  }
})

//delete book by id

router.delete("/deleteBook/:id",async(req,res)=>{
  const id=req.params.id;
  try{
     await bookModel.findByIdAndDelete(id).then(()=>
     res.status(201).json({message:"book deleted successfully"})
     )
  }
  catch(error){
    console.log(error)
  }
})

module.exports=router;


