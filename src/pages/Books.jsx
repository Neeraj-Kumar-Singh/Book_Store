import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios";
import BooksSection from '../components/BooksSection';
const Books = () => {
   const [Data, setData]=useState();
    useEffect(()=>{
        const fetch=async ()=>{
           await axios.get("http://localhost:3000/api/v1/getBooks")
           .then((res)=>setData(res.data.books))
          // .then((res)=>console.log(res))
           .catch(error=>{
            console.error(error)
           });
        };
        fetch();
    })
  return (
    <div className='body' style={{display:"flex",flexDirection:"column",height:"100%"}}>
       <div className='d-flex justify-content-center  align-items-center py-3 ' >
        <h4>Books</h4>
       </div>
       {
        Data ? (
         <BooksSection data={Data} />
        ):(
          <div style={{display:"flex",flexDirection:"column",height:"100vh"}}>Loading...</div>
        )
       }
    </div>
  )
}

export default Books