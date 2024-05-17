import React from 'react'
import TopNav from './TopNav'
import CustomFooter from './CustomFooter'
import './Residential.css'
import WhatsappIcon from './WhatsappIcon'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import ResidentialCarousel from './ResidentialCarousel'

function Residential() {
    const phoneNumber = '7303734500';
    const message = 'Hello!';

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1000, min: 1000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const headingStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        textAlign: 'center',
        marginTop: '4%',
        color: 'black',
        fontFamily: 'Spectral SC, sans-serif',
        marginTop:'4%',

    };
    return (
        <div>
            <TopNav/>

            <div className="full-screen-video">
                <video autoPlay muted loop>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="residential-box-container">
               <div className="residential-carouusel-heading">
                  <h2 className='res-head'>We Have Many Beautiful Duplex Penthouses,<br/>
                      2 BHK And 3 BHK Flats</h2>
               </div>

            <div className="residential-Container">
            <Carousel 
            responsive={responsive} 
          
            //  beforeChange={handleBeforeChange}
            //itemClass="custom-item"  
            // autoPlay={true}  
            // autoPlaySpeed={1000} 
            //  transitionDuration={500}
            //  customTransition="transform 500ms ease-in-out"
            // centerMode={true}
            // infiniteLoop={true}
            // autoPlayDirection={autoplayDirection}

            >
            <div className="residential-Card" >
                  <div className="residential-img-container">
                    <img 
                    className="residential-img-responsive"
                     src="https://media.istockphoto.com/id/1454430108/photo/luxurious-and-dark-apartment-master-bedroom-interior.webp?b=1&s=170667a&w=0&k=20&c=pf9B6zNV0YeSXtbhxdSkPtXiZhqH11SBakn0DeDBibI="
                    alt="trending project-1" />
                    </div>
                    <div className="residential-text-container">
                        <p> property 1</p>
                    </div>
                </div>
                <div className="residential-Card">
                  <img className="residential-img-responsive"
                     src="https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?t=st=1715943373~exp=1715946973~hmac=65808b4cf76c4fc75f1320239e2b719a257685866a21ede6730fea44e47deb54&w=900"
                    alt="trending project-2" />
                    <p> property 2</p></div>
                <div className="residential-Card"><img className="residential-img-responsive"
                     src="https://img.freepik.com/premium-photo/empty-square-front-city-commercial-building_1127-4353.jpg?w=900"
                    alt="trending project-3" />
                    <p> property 3</p>
                </div>
                <div className="residential-Card"><img className="residential-img-responsive"
                     src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="trending project-4" />
                    <p> property 4</p>
                </div>
                <div className="residential-Card"><img className="residential-img-responsive"
                     src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="trending project-5" />
                    <p> property 5</p>
                </div>
                <div className="residential-Card"><img className="residential-img-responsive"
                     src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="trending project-6" />
                    <p> property 6</p>
                </div>
            </Carousel>
            </div>
       </div>
       <h2 className='h2-world' style={headingStyle}>World Class Amenities</h2>
       <ResidentialCarousel />

            <div className="heading-why-this-property">
            <h2> Why This Property ?</h2>
            </div>
           <div className="amenities-section">
           <div className="amenities-container">
                    <div className="amenities-image-container">
                        <img className='img-res' src="https://img.freepik.com/premium-photo/elevating-living-smart-home-mobile-innovation_1036975-115485.jpg?w=900" alt="Amenities" />
                    </div>
                    
                

                <div className="amenities-list">
                    <div className="amenity-row">
                        <div className="amenity-item">
                             <i className="fas fa-shield-alt"></i>
                             <p>Secured Gated Community</p>
                        </div>

                        <div className="amenity-item">
                              <i className="fas fa-child"></i>
                              <p>Kids Play Area</p>
                        </div>
            <div className="amenity-item">
            <FontAwesomeIcon icon={faLock} />
                <p>Advanced safety systems</p>
            </div>
        </div>
        <div className="amenity-row">
          <div className="amenity-item">
            <i className="fas fa-camera"></i>
            <p>CCTV Security</p>
          </div>
            <div className="amenity-item">
               <i className="fas fa-exclamation-triangle"></i>
               <p>Panic Button Equipped Homes</p>
           </div>
           <div className="amenity-item">
                  <i className="fas fa-tree"></i>
            <p>70% open space</p>
          </div>
      </div>
           <div className="amenity-row">
               <div className="amenity-item">
                   <i className="fas fa-plug"></i>
                   <p>24 hours Power Supply</p>
               </div>
               <div className="amenity-item">
                   <i className="fas fa-car"></i>
                   <p>Private on-site parking</p>
              </div>
              <div className="amenity-item">
                   <i className="fas fa-road"></i>
                   <p>5 mt. wide internal roads</p>
             </div>
         </div>
         <div className="amenity-row">
        <div className="amenity-item">
            <i className="fas fa-store"></i>
            <p>Daily Needs Store</p>
        </div>
        <div className="amenity-item">
            <i className="fas fa-building"></i>
            <p>Low rise architecture</p>
        </div>
        <div className="amenity-item">
            <i className="fas fa-tint"></i>
            <p>Adequate water supply</p>
        </div>
    </div>
    {/* <div className="amenity-row">
        <div className="amenity-item">
            <i className="fas fa-utensils"></i>
            <p>Modular Kitchens</p>
        </div>
        <div className="amenity-item">
            <i className="fas fa-shield-alt"></i>
            <p>Earthquake resistant structure</p>
        </div>
        <div className="amenity-item">
            <i className="fas fa-cogs"></i>
            <p>World class facility management</p>
        </div>
    </div> */}
       
    </div>
 </div>
 </div>
            
            <CustomFooter/>
            <WhatsappIcon phoneNumber={phoneNumber} message={message} />
        </div>
    )
}

export default Residential
