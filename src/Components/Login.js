import React,{useState,useEffect} from 'react'
import './Login.css';
//import { useNavigate } from 'react-router-dom';
//import Cimg8 from './Cimg8.jpeg'
export default function Form() {
  // const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [isVisible, setIsVisible] = useState(true); 
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  // function LoginPage() {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  // useEffect(() => {
    // Show the pop-up after the page has loaded
  //   setShowPopup(true);
  // }, []);
  //const navigate = useNavigate();
    const handleSubmit = (event) => {
     // event.preventDefault();
      // navigate('/home');
      setIsVisible(false); 
    };
    const handleCloselogin = () => {
      // navigate('/home'); // Navigate to home page when close button is clicked
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
    //    <div>
    //        <div id="overlay" />
    //        <div id="popup"/>
            
    //      <div className="wrapper">
    //     <h2>Welcome!</h2>
    //     <p>Please enter your details to continue:</p>
    //     <form id="userForm" onSubmit={handleSubmit} >
        
    //     <div className="container">
    //       <form onSubmit={handleSubmit} >
    //         <label htmlFor="name">Name:</label>
    //         <input type="text" id="name" name="name" required />
    //         <label htmlFor="number">Number:</label>
    //         <input type="tel" id="number" name="number" required />
    //         <label htmlFor="email">Email:</label>
    //         <input type="email" id="email" name="email" required />
    //         <button type="submit">Submit</button>
    //         </div>
    //     </form>
    // </div>
    // </div>
    // <div className={`form-container ${showPopup ? 'show' : ''}`}>
    //    {showPopup && (
      <div>
      {isVisible && (
        <div>
          <div className="form-overlay" ></div>
    <div className="form-container" >
    <div className="form-content">
        {/* <div id="overlay" ></div>
        < div id="popup" > */}
        <button className="close-btn" onClick={handleCloselogin}>×</button>
        <div className="wrapper">
          
          {/* <h2>Welcome!</h2> */}
          <div className="Fimage">
        
               
          </div>
          <h1 className="Lheading" >Welcome!</h1>
          <p className="Lpara">Please enter your details to continue:</p>
          <form className="form-i" id="userForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name}  onChange={handleNameChange} onBlur={() => setErrors({ ...errors, name: '' })} style={{ width: '100%',height:'35px' }} required placeholder="Ex:xyz"/>
              {errors.name && <span className="error" style={{ color: 'red' }}>{errors.name}</span>}
              </div>
              <div className="form-group">
              <label htmlFor="number">Number:</label>
              <input type="tel" id="number" name="number" value={number} onChange={handleNumberChange} style={{ width: '100%',height:'35px' }} required  placeholder="Ex:9999999999" />
              {errors.number && <span className="error" style={{ color: 'red' }}>{errors.number}</span>}
              </div>
              <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} style={{ width: '100%',height:'35px' }} required placeholder="Ex:xyz@gmail.com"/>
              {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
              </div>
              <button type="submit" className="submit-button">Submit</button>
          </form>
          </div>
        </div>
      </div>
      </div>
       )}
     </div>
    );
}

