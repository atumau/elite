// import React from 'react'
// //import { Footer } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
// //import 'bootstrap/dist/css/bootstrap.min.css';
// //import 'bootstrap/dist/css/bootstrap-grid.min.css';

// function CustomFooter() {
//   return (
   
//        <footer className="bg-dark text-light py-4">

// <Container>

//   <Row>

//     {/* Three columns */}

//     <Col md={4}>

//       <h5>Column 1</h5>

//       <p>Content for the first column.</p>

//     </Col>

//     <Col md={4}>

//       <h5>Column 2</h5>

//       <p>Content for the second column.</p>

//     </Col>

//     <Col md={4}>

//       <h5>Column 3</h5>

//       <p>Content for the third column.</p>

//     </Col>

//     {/* Four columns */}

//     <Col md={3}>

//       <h5>Column 1</h5>

//       <p>Content for the first column.</p>

//     </Col>

//     <Col md={3}>

//       <h5>Column 2</h5>

//       <p>Content for the second column.</p>

//     </Col>

//     <Col md={3}>

//       <h5>Column 3</h5>

//       <p>Content for the third column.</p>

//     </Col>

//     <Col md={3}>

//       <h5>Column 4</h5>

//       <p>Content for the fourth column.</p>

//     </Col>

//   </Row>

// </Container>

// </footer>
   
//   )
// }

// export default CustomFooter






































import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

import '../Components/Customfooter.css';

function CustomFooter() {
  return (
    // <footer className="bg-dark text-light py-4">
    //   <footer style={{ backgroundColor: 'black' }} className="text-light py-4">
    //   <Container>
    //     <Row>
    //       <Col md={3} style={{ color: 'white' }}>
    //         <h5>Company</h5>
    //         <p>About Us</p>
    //         <p>Career</p>
    //         <p>Services</p>
    //         <p>Contact us</p>
    //         <p>Terms and Conditions</p>
    //         <p>Policy of Use</p>
    //         <p>Blogs</p>
    //       </Col>
    //       <Col md={3} style={{ color: 'white' }}>
    //         <h5>NETWORK SITES</h5>
    //         <p>Knowledge Base</p>
    //         <p>Forums</p>
    //         <p>Contact Us</p>
    //         <p>Press</p>
    //         <p>THeme showcase</p>
    //       </Col>
    //       <Col md={3} style={{ color: 'white' }}>
    //         <h5>Developers</h5>
    //         <p>Developer Site</p>
    //         <p>Beta Program</p>
    //         <p>Conribute to jetpack</p>
    //         <p>Developers Network</p>
    //         <p>Work with us</p>
    //       </Col>
    //       <Col md={3} style={{ color: 'white' }}>
    //         <h5>Partnerships</h5>
    //         <p>Became an Affiliate</p>
    //         <p>Became a Partner</p>
    //         <p>Listing Criteria</p>
    //       </Col>
    //     </Row>
    //   </Container>
    // </footer>




    
    //<footer style={{ backgroundColor: 'black', padding: '20px 0', marginTop:'40px', height:'200px' }}>
  //<div className="footer-container" style={{ maxWidth: '1140px', margin: 'auto', display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
   // <div className="footer-content" style={{ width: 'calc(25% - 20px)' }}>
     //


     <footer className="footer-f">
  <div className="container-f row-f">
    <div className="footer-col">
      <h4>company</h4>
      <ul>
        <li><a href="#">about us</a></li>
        <li><a href="#">our services</a></li>
        <li><a href="#">privacy policy</a></li>
        <li><a href="#">visit website</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>get help</h4>
      <ul>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">shipping</a></li>
        <li><a href="#">returns</a></li>
        <li><a href="#">order status</a></li>
        <li><a href="#">payment options</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>online shop</h4>
      <ul>
        <li><a href="#">download</a></li>
        <li><a href="#">changelog</a></li>
        <li><a href="#">github</a></li>
        <li><a href="#">all version</a></li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>follow us</h4>
      <div className="social-links">
        <a href="#"><i className="fa-brands fa-facebook-f" /></a>
        <a href="#"><i className="fa-brands fa-x-twitter" /></a>
        <a href="#"><i className="fa-brands fa-instagram" /></a>
        <a href="#"><i className="fa-brands fa-linkedin-in" /></a>
      </div>
    </div>
  </div>
</footer>


  );
}

export default CustomFooter;




