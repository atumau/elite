import React from 'react'
import TopNav from './TopNav'
import CustomFooter from './CustomFooter'
import './About.css';
//import Whatsapp from './Whatsapp';
import WhatsappIcon from './WhatsappIcon';

export default function About() {
  const phoneNumber = '7303734500';
  const message = 'Hello!';
  return (
    <div>
      <TopNav/>
      <div className="banner">
      <div className="container">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="bannerTagline">
            <div className="line1">
            <h1 className='line1-text'>Trending Projects: </h1> 
            <h1 className='line2-text'>Explore the Latest Innovations</h1></div>
          </div>
        </div>
      </div>
      <div className="about-heading-image-container">
        <img src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Heading Image" className="heading-image" />
      </div>
      </div>
     
<h1 className='about-text text-center' style={{padding:'40px'}}>About Trending Projects</h1>
<p className="about-para">In today's dynamic landscape of innovation, trending projects serve as beacons of inspiration, 
  showcasing the latest advancements and creative endeavors across various domains. 
  These projects represent the collective ingenuity of individuals and organizations, 
  offering insights into emerging technologies, groundbreaking research, and innovative solutions to modern challenges. 
  From pioneering sustainable initiatives to cutting-edge developments in artificial intelligence and beyond,
   trending projects capture the essence of progress and drive forward the frontier of possibility.
</p>
<br/>
<p className="about-para">Exploring trending projects provides a glimpse into the pulse of innovation, 
  reflecting the evolving interests and priorities of communities worldwide. 
  Whether it's in the realms of science, technology, art, or social impact, 
  these projects epitomize the spirit of exploration and experimentation.
   They inspire curiosity, spark dialogue, and catalyze collaboration, 
   shaping the trajectory of future endeavors.
    Engaging with trending projects not only informs
     but also ignites passion and drives individuals to contribute to the ever-evolving landscape of innovation.</p>
<br/>

     <div className="about-image-container">
        <img src="https://cdn.pixabay.com/photo/2013/09/25/18/02/porch-186402_640.jpg" alt="Heading Image" className="heading-image2" />
        <div className="about-text-container">
          <h1>OUR HOME YOUR GATEWAY</h1>
          <p>Our Real Estate project brings luxury living to Shimla, a hill station famous for 
            its verdant scenery, magnificent mountains and old-world charm with colonial 
            era architectural landmarks. The project, perched at 1800 meter above sea level,
             is located in New Shimla, the most premium location of Shimla. Spread over 5213 sq meter,
              phase 1 provides an exclusive inventory of 37 residential units comprising
               2 BHK units and duplex penthouses.</p>
          <h2>Live the high life</h2>
          <p>The project will be equipped with modern amenities and safety features ensuring a confortable
             and secure living environment from its habitants.</p>
        </div>
      </div>


{/* <div className="about-container">
      <div className="aboutbox">Trending project-1<br/>
         Second Floor, Smart Works Coworking, Raja Ram Mohan Roy Rd, Sampangi Rama Nagar, Bangalore 560001</div>
      <div className="aboutbox">Trending project-2<br/>
Workafella, Tower A, Tek Meadows, Elcot Sez, Sholinganallur, Chennai, Tamil Nadu- 600119</div>
      <div className="aboutbox">Trending project-3<br/>
1st Floor, Tower A, M3M Urbana Business Park, Sector 67, Gurgaon - 122001</div>
      <div className="aboutbox">Trending project-4<br/>
Good Earth Business Bay, 9th Floor, Sector 58, Gurgaon - 122011</div>
      <div className="aboutbox">Trending project-5<br/>
5th Floor, Smartworks Coworking, Purva summit, Whitefield Road, Kondapur, Hitech city, Hyderabad - 500081</div>
      <div className="aboutbox">Trending project-6<br/>
1A, Express Tower First Floor, 42A Shakespear Sarani, Kolkata, WB</div>
      
    </div> */}
      <CustomFooter/>
      <WhatsappIcon phoneNumber={phoneNumber} message={message} />
    </div>
  )
}