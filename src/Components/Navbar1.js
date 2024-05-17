import React,{useState} from 'react'
import "./Navbar1.css";
import { Link, NavLink } from "react-router-dom";


// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar1() {
    // const [isOpen, setIsOpen] = useState(false);
    //const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav>
        <Link to="/" className="title">
          Website
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li className="more-dropdown">
             <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <span onClick={toggleDropdown}>Project <span className="dropdown-icon">&#9662;</span></span>
                   {dropdownOpen && (
                     <ul className="dropdown-menu">
                        <li><NavLink to="/commercial">Commercial</NavLink></li>
                        <li><NavLink to="/residential">Residential</NavLink></li>
                        <li><NavLink to="/officespace">Office space</NavLink></li>
                      </ul>
                        )}
                    </div>
                </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contact</NavLink>
          </li>
          {/* <li className="more-dropdown">
             <div className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <span onClick={toggleDropdown}>Project <span className="dropdown-icon">&#9662;</span></span>
                   {dropdownOpen && (
                     <ul className="dropdown-menu">
                        <li><NavLink to="/commercial">Commercial</NavLink></li>
                        <li><NavLink to="/residential">Residential</NavLink></li>
                        <li><NavLink to="/officespace">Office space</NavLink></li>
                      </ul>
                        )}
                    </div>
                </li> */}
        </ul>
      </nav>







    )
}

export default Navbar1
