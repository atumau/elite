// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import { FaWhatsapp } from 'react-icons/fa';
import WhatsappIcon from './WhatsappIcon';
import './Carousels.css';
import Cimg8 from './Cimg8.jpeg'
import Cimg9 from './Cimg9.jpg'
import Cimg10 from './c10.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Carousel = () => {
  const phoneNumber = '7303734500';
  const message = 'Hello!';
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   // autoplaySpeed: null,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of slides to show at this breakpoint
          slidesToScroll: 1,
        
        }
      },
      {
        breakpoint: 1024, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of slides to show at this breakpoint
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 3, // Number of slides to show at this breakpoint
          slidesToScroll: 1,
        }
      }
    ],
   
  };
  
  const sliderStyle = {
    width: '100%', // Adjust the width of the slider container
    margin: 'auto',
    position: 'relative',
     marginBottom:'30px',
     marginTop:'-5.6%',//here i have done*********************
   
  };
  const imageStyle = {
    width: '100%', // Adjusted to 100% to fill the image container
    // height: '50%',
    maxHeight: '150%', // Ensure images don't exceed the width of the slider container
    objectFit: 'cover',
     // Maintain aspect ratio of images
  };
  const dotsStyle = {
    position: 'absolute',
  // Adjust the distance from the bottom as needed
    left: '70%', // Center the dots horizontally
    transform: 'translateX(-50%)', // Center the dots horizontally
    
  };
  const imageContainerStyle = {
    textAlign: 'center', // Center the images horizontally
  };

  const textContainerStyle = {
    position: 'absolute',
    top:'15%',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#601A53', // Change text color to black
    // backgroundColor: 'white',
    textAlign: 'center',
    zIndex:'1000',
    fontSize:'30px',
    fontFamily: 'Dancing Script, cursive', 
  };
  const logoContainerStyle = {
    textAlign: 'left',
    marginBottom: '20px', // Adjust the margin as needed
  };

  const logoStyle = {
    position:'absolute',
    marginTop:'1%',
    width: '70px', // Adjust the width of the logo
    height: '50px', // Maintain aspect ratio
    zIndex:'10000',
  };
  

  const text = "Estates..";

  return (

    <div style={sliderStyle}>
      <div >
      
     
      </div>
      <div style={textContainerStyle}>
        <p>{text}</p>
      
      </div>
    <Slider {...settings}>
      <div style={imageContainerStyle} className="text-overlay">
        
        <img src={Cimg8} alt="Slide 1" style={imageStyle}/>
      </div>
      <div style={imageContainerStyle}>
        <img src={Cimg8} alt="Slide 2" style={imageStyle}/>
      </div>
      <div style={imageContainerStyle} >
        <img src={Cimg8} alt="Slide 3"style={imageStyle}/>
      </div>

    </Slider>
    <div style={dotsStyle}></div> 
    {/* <div className="Carousel-whatsapp-icon" onClick={handleClick}>
                <FaWhatsapp />
            </div> */}
              <WhatsappIcon phoneNumber={phoneNumber} message={message} />
    </div>
    
  );
};

export default Carousel;
