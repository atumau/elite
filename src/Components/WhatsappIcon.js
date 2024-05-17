import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappIcon.css';

function WhatsappIcon({ phoneNumber, message }) {
   
    const handleClick = () => {
      const url = `https://wa.me/${7303734500}?text=${encodeURIComponent('hello')}`;
      window.open(url, '_blank');
    };
    return (
        <div className="main-whatsapp-icon" onClick={handleClick}>
      <FaWhatsapp />
    </div>
    )
}

export default WhatsappIcon
