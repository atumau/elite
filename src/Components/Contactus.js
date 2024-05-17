import React from "react";
import "../Components/Contactus.css";
import TopNav from "./TopNav";
import CustomFooter from "./CustomFooter";
const Contactus = () => {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  return (
    <>
    <TopNav/>
    <div className="full-contact">
      <h1 className="contact-head">Luxury living with Estate Excellence</h1>
      <p className="contact-sub">
        We would love to hear from you! Whether you have questions about our
        properties, need assistance with the buying or renting process, or
        simply want to learn more about what we offer, our dedicated team is
        here to help. Please fill out the contact form below, and one of our
        representatives will get back to you promptly. You can also reach us via
        phone or email for immediate assistance. At Estate Excellence, we are
        committed to providing exceptional service and ensuring your luxury
        living experience is nothing short of extraordinary. Contact us today
        and let us help you find your dream home.
      </p>
      <div className="container-c">
        <span className="big-circle" />
        <img src="img/shape.png" className="square" alt />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Lets Connect for your luxurious living with Estate Excellence
            </p>
            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt" /> &nbsp; &nbsp;
                <p>92 Electronic City Noida Uttar Pradesh India</p>
              </div>
              <div className="information">
                <i className="fas fa-envelope" /> &nbsp; &nbsp;
                <p>xyz00@gamil.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone" />
                &nbsp;&nbsp;
                <p>000-000-0000</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <span className="circle one" />
            <span className="circle two" />
            <form action="index.html" autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor>Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor>Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor>Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" defaultValue={""} />
                <label htmlFor>Message</label>
                <span>Message</span>
              </div>
              <input type="submit" defaultValue="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
      </div>
      <CustomFooter/>
    </>
  );
};

export default Contactus;
