import React,{ useState } from 'react';
// import Cimg5 from './Cimg5.jpg';
// import Cimg7 from './Cimg7.jpg';
// import Cimg6 from './Cimg6.jpg';
import './Box.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChartLine } from '@fortawesome/free-solid-svg-icons'; 

const Box = ({ color, title, content,src, shadowImage  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const darkenColor = (color, percent) => {
      var num = parseInt(color.replace("#", ""), 16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        G = ((num >> 8) & 0x00ff) + amt,
        B = (num & 0x0000ff) + amt;
  
      return (
        "#" +
        (
          0x1000000 +
          (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
          (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
          (B < 255 ? (B < 1 ? 0 : B) : 255)
        )
          .toString(16)
          .slice(1)
      );
    };
  const boxStyle = {
    backgroundColor: color,
    padding: '20px',
    margin: '10px',
    marginBottom:'200px',
    borderRadius: '5px',
    textAlign: 'center',
    width: '350px',
    height:'350px',
    transition: 'transform 0.3s', // Add transition for smooth effect
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    position: 'relative',
    backgroundImage: `url(${shadowImage})`,
  };
  const buttonStyle = {
    position: 'absolute',
    bottom: '0px', // Adjust as needed
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: darkenColor(color, -50),
    color: 'white',
    width:'100%',
    heigth:'10%',
    border: 'none',
 
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '25px',
    padding: '10px 0', // Adjust padding to center text vertically
  };
  const arrowStyle = {
    fontSize: '26px', // Adjust the font size to increase the arrow size
    marginLeft: '5px', // Adjust the margin to position the arrow properly
  };
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
    return (
    <div
      style={boxStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}>
      <h2>{title}</h2>
      <p>{content}</p>
      
      <img src={src} alt="Box Image" style={{ Width: '100%', height: '50%' }} />
      <div style={buttonStyle}>Explore Now  <span style={arrowStyle}>&rarr;</span><em className="icon-angle-right"></em></div>
      {/* <span style={buttonStyle}>Learn More</span> */}
    </div>
    
  );
};

// Main component rendering multiple boxes
const Boxes = () => {
  return (
    <>
    <h1 className='box-head'>Our Exclusive Projects</h1>
    <div className="insightBody" style={{ display: 'flex', justifyContent: 'center', paddingTop:'2rem', filter: "drop-shadow(2px 4px 6px black)" }}>
      {/* <FontAwesomeIcon icon={faChartLine} className="graphIcon" /> */}
      <Box 
        color="#ffedba" 
        src={"https://www.squareyards.com/assets/images/insight-tool-img/price-trends-img.png"} 
        title="Property Rates & Price Trends" 
        content=" Market rates, data analytics & regred transactions of top project & localities" 
      />
       <Box 
        color="#c5f4e5" 
        src={"https://www.squareyards.com/assets/images/insight-tool-img/property-rates-heatmap-img.png"} 
        title="Property Rates Heatmap" 
        content="An Interactive Map to help you understand a City's Real Estate" 
      />
       <Box 
        color="#ffd9f8" 
        src={"https://www.squareyards.com/assets/images/insight-tool-img/valuation-report-img.png"} 
        title="Valuation Report" 
        content="Get an instant & comprehensive Valuation Report of any property- downloadable in PDF"
       />
        <Box 
         color="#ffdebc" 
         src={"https://www.squareyards.com/assets/images/insight-tool-img/reviews-ratings-img.png"} 
         title="Projects Reviews & Ratings" 
         content="Don't just take our word for it; See what other residents, tenants & agents say about a project or locality " />
    </div>
    </>
  );
};

export default Boxes;
