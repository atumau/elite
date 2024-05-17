// EnquiryForm.js
import React, { useState,useEffect } from 'react';
import './Enquiryform.css';

function EnquiryForm({ onClose }) {
  
  const [isVisible, setIsVisible] = useState(true); 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});


  useEffect(() => {
    const handleOverlayVisibility = () => {
      document.body.classList.toggle('overlay-visible', isVisible);
    };
    handleOverlayVisibility(); // Initial setup
    return () => {
      document.body.classList.remove('overlay-visible'); // Clean up on unmount
    };
  }, [isVisible]);


    const handleSubmit = (event) => {
     // event.preventDefault();
      // navigate('/home');
      setIsVisible(false); 
    };
    const handleClose = () => {
      setIsVisible(false); 
    };
    if (!isVisible) {
      return null; // If form is not visible, return null to render nothing
    }
    const handleNameChange = (event) => {
      // Validate name field (allow only letters)
      const inputValue = event.target.value;
      if (/^[A-Za-z\s]+$/.test(inputValue) || inputValue === '') {
        setName(inputValue);
        setErrors({ ...errors, name: '' });
      } else {
        setErrors({ ...errors, name: 'Only letters are allowed' });
      }
    };
  
    const handleNumberChange = (event) => {
      // Validate number field (allow only numbers)
      const inputValue = event.target.value;
      if (/^\d*$/.test(inputValue) || inputValue === '') {
        setNumber(inputValue);
        setErrors({ ...errors, number: '' });
      } else {
        setErrors({ ...errors, number: 'Only numbers are allowed' });
      }
    };
  
    const handleEmailChange = (event) => {
      // Validate email field (optional: use regex for email format validation)
      setEmail(event.target.value);
      // Additional email format validation can be added here
    };

  return (
   

    <div>
      {isVisible && (
        <div>
          <div className="Eform-overlay" ></div>
    <div className="Eform-container" >
    <div className="Eform-content">
        {/* <div id="overlay" ></div>
        < div id="popup" > */}
        <button className="Eclose-btn" onClick={handleClose}>×</button>
        <div className="Ewrapper">
          
          {/* <h2>Welcome!</h2> */}
       
          {/* <h1 className="Eheading" style={{fontSize:"30px",marginLeft:"35%",marginTop:'-40px'}}>Welcome!</h1> */}
          <p className="Epara">Please enter your details:</p>
          <form id="userForm" onSubmit={handleSubmit}>
            <div className="Eform-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name}  onChange={handleNameChange} onBlur={() => setErrors({ ...errors, name: '' })} style={{ width: '100%',height:'35px' }} required placeholder="Ex:xyz"/>
              {errors.name && <span className="error" style={{ color: 'red' }}>{errors.name}</span>}
              </div>
              <div className="Eform-group">
              <label htmlFor="number">Number:</label>
              <input type="tel" id="number" name="number" value={number} onChange={handleNumberChange} style={{ width: '100%',height:'35px' }} required  placeholder="Ex:9999999999" />
              {errors.number && <span className="error" style={{ color: 'red' }}>{errors.number}</span>}
              </div>
              <div className="Eform-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={{ width: '100%',height:'35px' }} required placeholder="Ex:xyz@gmail.com"/>
              {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
              </div>
              <button type="submit" className="Esubmit-button">Submit</button>
          </form>
          </div>
        </div>
      </div>
      </div>
       )}
     </div>

  );
}

export default EnquiryForm;
