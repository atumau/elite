import React, { useState, useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './Navbar.css';
//import { Link } from 'react-router-dom';
import Carousels from './Carousels';
import Box from './Box';
import Trending from './Trending';
import CustomFooter from './CustomFooter';
//import Navbar1 from './Navbar1';
import Login from './Login'
import Whatsapp from './Whatsapp';
import TopNav from './TopNav'
import Enquiryform from './Enquiryform';
import Cardslider from './Cardslider';

//import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000); // Show form after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  
  const handleEnquiryClick = () => {
    setShowEnquiryForm(prevState => !prevState); // Toggle the state
  };

  // const handleCloseEnquiryForm = () => {
  //   setShowEnquiryForm(false);
  // };
 

  return (
    <div className="home-container">
       {/* {showForm && <Login />} */}
     <div>
       {/* <Navbar1/> */}
       <TopNav/>
       
     </div>
     {/* {showForm && <Login />} */}
      <div className="carousel-container">
        {/* <h1 style={{color:"Black", textAlign:"center" }}>Real Estate</h1> */}
        <Carousels  />
        
      
      </div>
      <div>
        <Box />
        
      </div>
      <Trending/>
     <Cardslider/>
      <div>
        <CustomFooter/>
      </div>
      {/* {showEnquiryForm && <Enquiryform />}
      <Whatsapp handleEnquiryClick={handleEnquiryClick} /> */}
    </div>
  );
}





