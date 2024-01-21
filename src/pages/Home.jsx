import React from 'react'
import bookstoreImage from "../images/book-stores.png";
import { Link } from 'react-router-dom';
import "./Home.css"
 const Home = () => {
  return (
    <div className=" container mt-5" style={{width:"100%"}}>
      <div className="row">
        {/* Column 1 - Get Your Books Here */}
        <div className="col-md-6">
          <h1>Great Collection of Books</h1>
          <p>
            Welcome to our online bookstore! Find a wide variety of books and
            explore your favorite genres. Whether you're into fiction, non-fiction,
            or anything in between, we have something for everyone.
          </p>
          <Link to="/books" className="viewbooks my-3">View Books</Link>
          {/* Add any other content or links related to getting books */}
        </div>

        <div className="col-md-6">
          <div className="img-container">
            <img
              src={bookstoreImage}
              alt="Bookstore Image"
              className="img-fluid"
            />
          </div>
          {/* Add any additional content or styling for the image section */}
        </div>
      </div>
    </div>
  )
}

export default Home;