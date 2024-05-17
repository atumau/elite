import React,{useState} from 'react'
import './Services.css';
import TopNav from './TopNav'
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import CustomFooter from './CustomFooter';

function Services() {
    const phoneNumber = '7303734500';
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission
      console.log('Form submitted:', { name, phone, email, additionalInfo });
      // Reset form fields
      setName('');
      setPhone('');
      setEmail('');
      setAdditionalInfo('');
    };
    const handleCallClick = () => {
      const url = `tel:${phoneNumber}`;
      window.open(url, '_blank');
  };
    return (
        <div>
             <div className="services-background">
                 <TopNav style={{position:'fixed'}}/>
             </div>
             <div className="service-heading">
                <h1> Services</h1>
             </div>
             <div className="service-para">
                 <p>We offer quality Property Management on demand services to
                 all owners and investors owning a property<br/> as secondary home
                  or residential investment in the Miami area and want, on site, trusted contact.</p>
             </div>
             <div className="circle-container">
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_b82c76e177174847b241c51bf1899504~mv2.jpeg/v1/crop/x_334,y_0,w_1333,h_1333/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/61f2b1852e64db1e46901c37_black-business-woman-counts-calculator-makes-notes-financier-acco.jpeg" alt="Image 1" />
                    <h2>Rent Collection</h2>
                    <p>Rent collection is the process of gathering and receiving rental payments from tenants 
                        for the use of a property owned or managed by a landlord.</p>
                </div>
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_57a13aaaf6be47419af4248a56f575a9~mv2.jpg/v1/crop/x_130,y_0,w_540,h_540/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/work-with-realtor.jpg" alt="Image 2" />
                    <h2>Walkthrough</h2>
                    <p>A walkthrough is a visual inspection or tour of a property, typically conducted by a prospective buyer,
                         tenant, or an inspector, to assess its condition and features.</p>
                </div>
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_29d273a883d44fcbab757ee622bd9d43~mv2.jpeg/v1/crop/x_1080,y_0,w_1680,h_1680/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/property-maintenance-hero.jpeg" alt="Image 3" />
                    <h2>Maintenance & Repairs</h2>
                    <p>Maintenance refers to the regular and proactive efforts taken to keep something in good condition and prevent
                         it from deteriorating. Repairs, on the other hand.</p>
                </div>
                </div>
            <div className="service-circle-group">
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_520c0946dbca4d9a8ff5818b646f8d36~mv2.jpg/v1/crop/x_102,y_0,w_408,h_408/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/istockphoto-1202459140-612x612.jpg" alt="Image 1" />
                    <h2>Representation with other Professionals</h2>
                    <p>Rent collection is the process of gathering and receiving rental payments from tenants 
                        for the use of a property owned or managed by a landlord.</p>
                </div>
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_e66904f81039415e8b92aa56d361ce86~mv2.jpeg/v1/crop/x_168,y_0,w_665,h_665/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/photo-1486312338219-ce68d2c6f44d.jpeg" alt="Image 2" />
                    <h2>Account Payables</h2>
                    <p>A walkthrough is a visual inspection or tour of a property, typically conducted by a prospective buyer,
                         tenant, or an inspector, to assess its condition and features.</p>
                </div>
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_b52d443ba21843a0be76867ef3de895e~mv2.jpg/v1/crop/x_250,y_0,w_300,h_300/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Leading-Practices-for-Accounting-and-Financials.jpg" alt="Image 3" />
                    <h2>Reports, Financials and Bookeeping</h2>
                    <p>Maintenance refers to the regular and proactive efforts taken to keep something in good condition and prevent
                         it from deteriorating. Repairs, on the other hand.</p>
                </div>
            </div>
            <div className="Service-form-container">
              <h2>For further Queries !</h2>
                 <form onSubmit={handleSubmit}>
                    <div className="service-input-group">
                     <FaUser className="icon" />
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                         required
                      />
                    </div>
        <div className="service-input-group">
          <FaPhone className="icon" />
          <input
            type="tel"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="service-input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="service-input-group">
        {/* <FaEnvelope className="icon" /> */}
            <input
             type="text"
             placeholder="your Additional Query"
              value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            style={{ height: '100px' }}
            required
            />
            </div>
        <button className="service-Contact-button" type="submit">Submit</button>
      </form>
    </div>
<CustomFooter/>
        </div>
    )
}

export default Services
