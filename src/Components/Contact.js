import React,{useState} from 'react'
import TopNav from './TopNav'
import CustomFooter from './CustomFooter';
import './Contact.css';
//import Whatsapp from './Whatsapp';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import WhatsappIcon from './WhatsappIcon';

export default function Contact() {
  const phoneNumber = '7303734500';
  const message = 'Hello!';
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        console.log('Form submitted:', { name, phone, email });
        // Reset form fields
        setName('');
        setPhone('');
        setEmail('');
      };
      const handleCallClick = () => {
        const url = `tel:${phoneNumber}`;
        window.open(url, '_blank');
    };
  return (
    <div className="contact-background">
      <TopNav/>
      <div className="contact-content-box">
      <div className="contact-content-heading1">
         <h1> YOUR Luxury Living</h1>
      </div>
      <div className="contact-content-heading2">
        <h2>Estate Excellence</h2>
      </div>
      <div className="contact-content-para">
        {/* <p>Experience Luxury Living with Us.</p> */}
      </div>
      </div>
              <div className="contact-call-icon" onClick={handleCallClick}>
              <FaPhone/>
              </div>
              <div className="contact-span">
                <span>call us to get more information.</span>
                </div>
                <div className="contact-number">
                   <span>7303734500</span>
                </div>
         
      <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaPhone className="icon" />
          <input
            type="tel"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="Contact-button" type="submit">Submit</button>
      </form>
    </div>
   
      <CustomFooter/>
      <WhatsappIcon phoneNumber={phoneNumber} message={message} />
      </div>
  );
  }



































      
//        <div className="Cheading">
//           <h1>Chennai Corporate Office</h1>
//       </div>
//       <div className="contact-container">
//       <div className="box">Bangalore<br/>
//          Second Floor, Smart Works Coworking, Raja Ram Mohan Roy Rd, Sampangi Rama Nagar, Bangalore 560001</div>
//       <div className="box">Chennai<br/>
// Workafella, Tower A, Tek Meadows, Elcot Sez, Sholinganallur, Chennai, Tamil Nadu- 600119</div>
//       <div className="box">Gurgaon Corporate Office<br/>
// 1st Floor, Tower A, M3M Urbana Business Park, Sector 67, Gurgaon - 122001</div>
//       <div className="box">Gurgaon Sales Office<br/>
// Good Earth Business Bay, 9th Floor, Sector 58, Gurgaon - 122011</div>
//       <div className="box">Hyderabad<br/>
// 5th Floor, Smartworks Coworking, Purva summit, Whitefield Road, Kondapur, Hitech city, Hyderabad - 500081</div>
//       <div className="box">Kolkata<br/>
// 1A, Express Tower First Floor, 42A Shakespear Sarani, Kolkata, WB</div>
    
//     </div> 
//     <CustomFooter/>
//     <Whatsapp/>
//     </div>
//   )
// }
