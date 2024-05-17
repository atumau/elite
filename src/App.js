import React from 'react'
//import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Contactus from './Components/Contactus';
 import Form from './Components/Login';
 //import 'bootstrap/dist/css/bootstrap.min.css';
//import FAQ from './Components/FAQ';
//import ability1 from './Components/ability1.jpg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Commercial from './Components/Commercial';
import Residential from './Components/Residential';
import OfficeSpace from './Components/OfficeSpace';
import '@fortawesome/fontawesome-free/css/all.css';
import Career from './Components/Career';
import Services from './Components/Services';
import Terms from './Components/Terms';
import { Navbar } from 'react-bootstrap';
import Cardslider from './Components/Cardslider';
export default function App() {
   return (
     <>
       <BrowserRouter>
       <Navbar/>
       <Form />
       <div className="container">
        <Routes>
         <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About />} />
         <Route exact path="/contactus" element={<Contactus />} />
         <Route exact path="/login" element={<Form/>}></Route>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/commercial" element={<Commercial />} />
          <Route exact path="/residential" element={<Residential />} />
          <Route exact path="/officespace" element={<OfficeSpace />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/cardslider" element={<Cardslider />} />
       </Routes>
      </div>
     </BrowserRouter>
    </>
   )
  }