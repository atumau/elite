import React,{useState} from 'react'
//import { FaWhatsapp } from 'react-icons/fa';
//import { FaPhone } from 'react-icons/fa';
import './Whatsapp.css';
//import Phone6 from './Phone6.gif'
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
//import Enquiryform from './Enquiryform';

function Whatsapp({ handleEnquiryClick }) {
    const phoneNumber = '7303734500'; // Replace this with your phone number
  const message = 'Hello!'; // Replace this with your message
  //const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  //const [enquiryData, setEnquiryData] = useState(null);

  
  const handleCallClick = () => {
    const url = `tel:${phoneNumber}`;
    window.open(url, '_blank');
};

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  // const handleEnquiryClick = () => {
  //   // This function will be implemented in the Home component
  // };


  

  // const handleEnquirySubmit = (data) => {
  //   // Handle enquiry form submission
  //   console.log('Enquiry submitted:', data);
  //   setEnquiryData(data);
  //   setIsEnquiryOpen(false);
  // };
    return (
      <div className="whatsapp-parent-container">
      <div className="icon-container">
        {/* {isEnquiryOpen && <Enquiryform onSubmit={handleEnquirySubmit} />} */}
            <div className="call-icon" onClick={handleCallClick}>
              
              {/* <img src={Phone6}  style={{width:'90px',background:'tranparent',
              marginTop:'220px',marginLeft:'750%'}} alt="WhatsApp GIF" /> */}

              <FaPhone/>
              <span>call</span>
            </div>
            <div className="inquiry-icon" onClick={handleEnquiryClick}>
            {/* <div className="inquiry-icon"> */}
               <div className="envelope-icon">
               <FaEnvelope />
               <span>Enquiry</span>
              </div>
            </div>
            <div className="whatsapp-icon" onClick={handleClick}>
             <FaWhatsapp />
            <span>WhatsApp</span>
            </div>
            
    </div>
    </div>
    )
}


export default Whatsapp;
