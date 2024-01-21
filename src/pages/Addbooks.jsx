import React, { useState } from 'react'
import "./Home.css"
import axios from 'axios';
const Addbooks = () => {

  const [Data, setData]=useState({
    bookname:"",
    author:"",
    description:"",
    price:"",
    image:"",
  });
  const change=(e)=>{
    const {name,value}=e.target;
    setData({...Data,[name]:value});
  }
  const submit=async (e)=>{
    console.log(submit)
    e.preventDefault();
    await axios.post("http://localhost:3000/api/v1/add",Data).then((res)=>alert(res.data.message));
    setData({
      bookname:"",
      author:"",
      description:"",
      price:"",
      image:"",
    }

    )
  }
console.log(Data);
  return (
    <div className="body" style={{ width: "100%", display: "flex", flexDirection: "column", height: "100vh", alignItems: "center", marginTop: "20px" }}>
      <div className="mb-3" style={{ width: "50%" }}>
        <label for="exampleFormControlInput1" className="form-label">Name of book</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Name"
        name="bookname"
        value={Data.bookname}
        onChange={change}
        />
      </div>
      <div className="mb-3" style={{ width: "50%" }}>
        <label for="exampleFormControlInput1" className="form-label">Author</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Author"
        name="author"
        value={Data.author}
        onChange={change}
        />
      </div>
      <div className="mb-3" style={{ width: "50%" }}>
        <label for="exampleFormControlInput1" className="form-label">Price</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Price"
        name="price"
        value={Data.price}
        onChange={change}
        />
      </div>
      <div className="mb-3" style={{ width: "50%" }}>
        <label for="exampleFormControlInput1" className="form-label">Image</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Image"
        name="image"
        value={Data.image}
        onChange={change}
        />
      </div>
      <div className="mb-3" style={{ width: "50%" }}>
        <label for="exampleFormControlInput1" className="form-label">Description</label>
        <input 
        type="email" 
        className="form-control" 
        id="exampleFormControlInput1" 
        placeholder="Describe"
        name="description"
        value={Data.description}
        onChange={change}
        />
      </div>
      <button class="btn btn-success"  onClick={submit}>Submit</button>
    </div>
  )
}

export default Addbooks
