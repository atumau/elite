import React from 'react'
import TopNav from './TopNav'
import './OfficeSpace.css';
import CustomFooter from './CustomFooter'
import WhatsappIcon from './WhatsappIcon';

function OfficeSpace() {
    const phoneNumber = '7303734500';
    const message = 'Hello!';

    return (
        <div>
             <div className="Officespace-background">
                 <TopNav style={{position:'fixed'}}/>
                 <div className="officespace-content-box">
                  <div className="officespace-content-heading1">
                       <h1 className='o-h'> Office Space</h1>
                  </div>
                 <div className="officespace-content-heading2">
                      <h2 className='o-s'>Keys to your dream house</h2>
                 </div>
             </div>
            </div>
          <div className='of'>
                <div className="officespace-para3">
                     <p className='office-t'>Our profesionals team provides
                        our clients with impartial and unbiased property advice in the
                        commercial real estate sector across all prime markets.</p>
                       </div> 
                     
                       <div className="officespace-para1-img1">
                           <img src="https://media.istockphoto.com/id/1536191188/photo/web-developers-using-a-computer-together-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=12s792O3eRQUBbfts90cqJjCAnGkR_UZ_2s2LbBm6GM=" 
                           alt="Image 1" 
                           style={{ width: '500px', height: '302px' }} 
                           />
                       </div> 
         
          <div className="officespace-para2">
              <p className='office-t'>It is a unique office services platform in India which provides tailored
                   and specific Tenant & Landlord Representation services.
                    Our team of highly trained and experienced office 
                       They concentrate on providing fair, independent and unbiased commercial real estate services to you.
               </p>
            </div>
                   <div className="officespace-para2-img2">
                       <img src="https://media.istockphoto.com/id/1487151957/photo/team-strategy-meeting-on-research-post-it-on-glass-wall-and-group-work-planning-together.webp?b=1&s=170667a&w=0&k=20&c=9t6bbhxCBpX4bxUXKSOeQD_I2tR_F8IpKJj7dxuWYuo=" 
                        alt="Image 1" 
                        style={{ width: '500px', height: '302px' }}
                         />
                    </div> 
            <div className="officespace-para3">
               <p className='office-t'>Our full scope of services includes market research, detailed market scanning 
               for all available commercial properties, in-depth financial analysis and technical 
               due diligence in coordination with our Project Management teams. Our systematic approach is geared to deliver cost effective and creative solutions to you.
               </p> 
              
          </div>
          <div className="officespace-para3-img3">
                       <img src="https://media.istockphoto.com/id/1363104915/photo/presentation-in-multi-ethnic-office-conference-room-meeting-of-diverse-young-entrepreneurs.jpg?s=1024x1024&w=is&k=20&c=RF0n5qOzwxDHMadmsoY--POKAnLH_Vlw-8HthVRJ_Wg=" 
                        alt="Image 1" 
                        style={{ width: '500px', height: '302px' }}
                         />
                    </div> 
                    </div>
          {/* <div className="officespace-box-container">
                <div className="officespace-box">
                    <img src="https://static.wixstatic.com/media/207974_b82c76e177174847b241c51bf1899504~mv2.jpeg/v1/crop/x_334,y_0,w_1333,h_1333/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/61f2b1852e64db1e46901c37_black-business-woman-counts-calculator-makes-notes-financier-acco.jpeg" alt="Image 1" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
                <div className="officespace-box">
                    <img src="https://static.wixstatic.com/media/207974_57a13aaaf6be47419af4248a56f575a9~mv2.jpg/v1/crop/x_130,y_0,w_540,h_540/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/work-with-realtor.jpg" alt="Image 2" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
                <div className="officespace-box">
                    <img src="https://static.wixstatic.com/media/207974_29d273a883d44fcbab757ee622bd9d43~mv2.jpeg/v1/crop/x_1080,y_0,w_1680,h_1680/fill/w_121,h_121,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/property-maintenance-hero.jpeg" alt="Image 3" />
                    <div className="commercial-text">Text at the bottom</div>
                </div>
               
            </div>
  */}
 <CustomFooter/>
 <WhatsappIcon phoneNumber={phoneNumber} message={message} />
        </div>
    )
}

export default OfficeSpace
