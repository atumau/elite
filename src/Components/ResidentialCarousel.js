import React from 'react'
import '../Components/ResidentialCarousel.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ResidentialCarousel.css';
import Cimg8 from './Cimg8.jpeg'

function ResidentialCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Adjust the autoplay speed as needed
      };
      const sliderStyle = {
        width: '100%', // Adjust the width of the slider container
        margin: 'auto',
        position: 'relative',
      
        marginTop: '50px', // Add margin from top
       
      };
      const imageContainerStyle = {
        textAlign: 'center', // Center the images horizontally
        height: '40% !important',
      };
      const imageStyle = {
        width: '100%', // Ensure the image covers the entire width of the container
        height: '100%', // Ensure the image covers the entire height of the container
        objectFit: 'cover', // Maintain aspect ratio and cover the entire container
      };
     
    return (
      
        <div style={sliderStyle}>
            
            <Slider {...settings}>
      <div style={imageContainerStyle}>
        <img src="https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666300.jpg?t=st=1715943583~exp=1715947183~hmac=df44d7a2083b845f5be5b21b260fd3182a52582cb5fd2fdcb718040ff3ce3c9d&w=900"
        alt="Slide 1" 
        style={imageStyle}
        />
      </div>
      <div style={imageContainerStyle}>
        <img src="https://img.freepik.com/premium-photo/modern-residential-luxury-3d-rendering-real-estate-hd-resolution_636537-165818.jpg?w=900" 
        alt="Slide 2" 
        style={imageStyle}
        />
      </div>
      <div style={imageContainerStyle}>
        <img src="https://img.freepik.com/premium-vector/beautiful-country-house-with-roof-terrace-solar-panels-exterior-interior-design-luxury_1035899-2942.jpg?w=900" 
        alt="Slide 3" 
        style={imageStyle}
        />
      </div>
      <div style={imageContainerStyle}>
        <img src="https://img.freepik.com/premium-photo/cityscape-with-row-houses_856434-3612.jpg?w=900" 
        alt="Slide 4" 
        style={imageStyle}
        />
      </div>
    </Slider>
        </div>
        
    )
}

export default ResidentialCarousel
