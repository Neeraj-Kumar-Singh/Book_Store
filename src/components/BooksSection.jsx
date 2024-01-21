import React from 'react';
import axios from 'axios';

const BooksSection = ({ data }) => {
    // console.log(data)
  const handleDelete = async (id) => {
    console.log("clicked dlete");
    
        
      // Make a DELETE request to your backend route with the book ID
      await axios.delete(`http://localhost:3000/api/v1/deleteBook/${id}`);

      // Optionally, you can update the local state directly if needed
      // Example: setBooks(books.filter(book => book.id !== id));
   
  };

  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap '>
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className='m-2'
            style={{
              width: '200px',
              height: '350px',
              border: '1px solid black',
              borderRadius: '10px',
            }}
          >
            <div>
              <img
                style={{
                  width: '200px',
                  height: '210px',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
                className='img-fluid'
                src={item.image}
                alt={`Book cover for ${item.bookname}`}
              />
            </div>
            <h6 className='px-2 my-1'>{item.bookname.slice(0, 20)}...</h6>
            <b className='mx-2'>Rs. {item.price}</b>
            <div className='d-flex justify-content-around align-item-center my-2'>
              {/* Pass the item's ID to the handleDelete function */}
              <button
                className='btn btn-danger'
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BooksSection;
