import React,{useState} from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
//import Commercial from './Commercial';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
   // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    //const [menuOpen, setMenuOpen] = useState(false);
 
   
    // const showNavbar = () => {
    //   setIsOpen(!isOpen);
    // };

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };
    const toggleMenu = () => {
      setIsOpen(!isOpen);
  };
//   const toggleMenu = () => {
//     setIsDropdownOpen(!isDropdownOpen);
// };
const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);

  const toggleProjectDropdown = () => {
    setIsProjectDropdownOpen(!isProjectDropdownOpen);
  };
  return (
    
    <div>
       <nav >
         
       {/* <ul className={`navbar ${isOpen ? 'open' : ''}`}> */}
         <ul className="navbar">
       
            <img src="logo.png" alt="Logo" className="logo" />
       
        
          <div className="brand-container">
          <h3 className="brand" style={{color:"white",textAlign:"left",marginLeft:'50px' }}>S Y</h3>
          </div>
          <button className="navbar-toggler"  aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span className="navbar-toggler-icon" >&#9776;</span>
                    </button>
        
          {/* {isOpen && (
                        <> */}
         {/* {isOpen && (
          <React.Fragment>  */}
          <li>
            <Link to="/home" className="nav-link" >HOME</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link" >ABOUT US</Link>
          </li>
          {/* <li>
            <Link to="/contact" className="nav-link">Contact us</Link>
          </li> */}
          
          <div className="dropdown" onMouseEnter={toggleProjectDropdown} onMouseLeave={toggleProjectDropdown}>
             <span className="nav-item" onClick={toggleProjectDropdown}>
                Project <span className={`dropdown-icon ${isProjectDropdownOpen ? 'open' : ''}`}>&#9662;</span>
              </span>
          {isProjectDropdownOpen && (
            <ul className="dropdown-menu">
                  <li><Link to="/commercial" className="nav-link">Commercial</Link></li>
                  <li><Link to="/residential" className="nav-link">Residential</Link></li>
                  <li><Link to="/officespace" className="nav-link">Office Space</Link></li>
            </ul>
          )}
        </div>
           <li>
            <Link to="/contactus" className="nav-link" >Contact us</Link>
          </li>
          {/* </React.Fragment>
          )}  */}
           {/* </>
                    )} */}
</ul>
{/* <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}

          {/* <li>
            <Link to="/login" className="nav-link" onSubmit={handleSubmit}>LOGIN</Link>
          </li> */}
        
      </nav>
    </div>
  
  );
}

export default Navbar
