import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import  Home  from './pages/Home';
import Books from './pages/Books';
import Addbooks from "./pages/Addbooks";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';


function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path ="/books" element={<Books />} />
        <Route  path ="/addbooks" element={<Addbooks />} />
        
        
      </Routes>
      <Footer />
    </Router>
    
   
  );
}

export default App;
