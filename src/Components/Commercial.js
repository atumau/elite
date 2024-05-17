import React from 'react'
import TopNav from './TopNav'
import './Commercial.css';
import CustomFooter from './CustomFooter';
import WhatsappIcon from './WhatsappIcon';

function Commercial() {
    const phoneNumber = '7303734500';
  const message = 'Hello!';
  return (
    <div>
       <div className="commercial-background">
                 <TopNav style={{position:'fixed'}}/>
             
             <div className="commercial-content-box">
               <div className="commercial-content-heading1">
                 <h1 className='com-head'> Dream  Property</h1>
              </div>
            <div className="commercial-content-heading2">
                <h2 className='com-sub'>Living Space</h2>
            </div>
             <div className="commercial-content-para">
                <p className='com-para'>Experience Luxury Living with Us.</p>
            </div>
         </div>
      </div>
      <div className="commercial-content">
                <div className="commercial-text-container">
                    <h2>Establish trust and credibility</h2>
                    <p>Whether you’re a property owner or broker, having an established,
                         professional online presence is essential to convey professionalism
                          within the CRE community.</p>
                </div>
                <div className="commercial-circle-img">
                    <img src="https://www.sharplaunch.com/static/64d21c29ee4891dbd1837ffca39b0dbc/83b0f/Commercial-real-estate-website-design-body01.webp" alt="Dream Property" />
                </div>
            </div>

            <div className="commercial-content-2">
                <div className="commercial-circle-img">
                    <img src="https://www.sharplaunch.com/static/a612bc16456b3c1c92a7034cb65d4d67/83b0f/Commercial-real-estate-website-design-body022.webp" alt="Dream Property" />
                </div>
                <div className="commercial-text-container2">
                <h2>Make a powerful first impression</h2>
                    <p>A well-designed property website in line with your corporate branding helps 
                        deliver a great first impression among your valued prospects.</p>
                </div>
            </div>
            
                   
                {/* Add more circle components here if needed */}
           
                {/* <div className="commercial-box">
                    <img src="https://media.istockphoto.com/id/1405631817/photo/real-estate-contract-signing-concept-businesswoman-signing-a-contract-to-legally-for-the.webp?b=1&s=170667a&w=0&k=20&c=r8MrHu5xqu1P3wABpCyMbHM-i0cY6DIdp87Vhpr_GaI=" alt="Image 1" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
                <div className="commercial-box">
                    <img src="image2.jpg" alt="Image 2" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
                <div className="commercial-box">
                    <img src="image3.jpg" alt="Image 3" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
                <div className="commercial-box">
                    <img src="image4.jpg" alt="Image 4" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
                <div className="commercial-box">
                    <img src="image5.jpg" alt="Image 5" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
                <div className="commercial-box">
                    <img src="image6.jpg" alt="Image 6" />
                    <div className="commercial-text">Text at the bottom</div>
                </div> */}
           
            {/* <div className="circle-container">
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_520c0946dbca4d9a8ff5818b646f8d36~mv2.jpg/v1/crop/x_102,y_0,w_408,h_408/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/istockphoto-1202459140-612x612.jpg" alt="Image 1" />
                    <h2>Rent Collection</h2>
                    <p>Rent collection is the process of gathering and receiving rental payments from tenants 
                        for the use of a property owned or managed by a landlord.</p>
                </div>
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_b49f0610b0b44969b1329fa94346dd59~mv2.jpg/v1/crop/x_400,y_0,w_801,h_801/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/15-Flexible-Administrative-Jobs-in-Georgia.jpg" alt="Image 2" />
                    <h2>Walkthrough</h2>
                    <p>A walkthrough is a visual inspection or tour of a property, typically conducted by a prospective buyer,
                         tenant, or an inspector, to assess its condition and features.</p>
                </div>
                <div className="circle">
                    <img src="https://static.wixstatic.com/media/207974_d54536692b7e48bcba38ac64e5efaa48~mv2.jpg/v1/crop/x_164,y_0,w_422,h_422/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/gettyimages-1043018862_750xx4896-2759-0-0.jpg" alt="Image 3" />
                    <h2>Maintenance & Repairs</h2>
                    <p>Maintenance refers to the regular and proactive efforts taken to keep something in good condition and prevent
                         it from deteriorating. Repairs, on the other hand.</p>
                </div>
            </div>  */}
            <div>
               <CustomFooter/>  
            </div>
          
            <WhatsappIcon phoneNumber={phoneNumber} message={message} />
    </div>
  )
}

export default Commercial
