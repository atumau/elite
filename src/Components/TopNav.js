import React, { useState } from 'react';
import './TopNav.css'; // Import CSS file if styles are in a separate file
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [isResponsive, setIsResponsive] = useState(false);
    

    const toggleResponsive = () => {
        setIsResponsive(!isResponsive);
    };

    return (
        <>
       
      
        <div className={`topnav ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
        <img src='logo.png' className='logopng' alt=''/>
            {/* <Link to="/news">News</Link> */}
            
            <Link className="nav-contact" style={{float: isResponsive ? 'none' : 'right'}} to="/contactus">Contact Us</Link>

            {/* <Link className="nav-contact" style={{float: isResponsive ? 'none' : 'right'}} to="/contact">Contact</Link> */}
            <div className="dropdown" style={{float: isResponsive ? 'none' : 'right'}}>
                <button className="dropbtn">Project
                    <i className="fa fa-caret-down"style={{ marginLeft: '5px' }} ></i>
                </button>
                <div className="dropdown-content">
                    <Link to="/commercial">Commercial</Link>
                    <Link to="/residential">Residential</Link>
                    <Link to="/officespace">Office Space</Link>
                </div>
            </div> 
            <Link style={{float: isResponsive ? 'none' : 'right'}} to="/about">About Us</Link>
            <Link  to="/home" className="icon" onClick={toggleResponsive}>
                <i className="fa fa-bars"></i>
            </Link>
            {/* <Link className="nav-contact" style={{float: isResponsive ? 'none' : 'right'}} to="/contact">Contact</Link> */}
            <Link style={{float: isResponsive ? 'none' : 'right'}} to="/home" className="active">Home</Link>
         </div>
       
         </>
    );
};

export default TopNav;
