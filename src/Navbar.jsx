import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.jpeg'; 

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style={{
    background: "linear-gradient(135deg, #8B5E3C, #D8A055)", boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)"
}}>
      <div className="container">
        <img src={logo} alt="" style={{height:'50px',width:'50px',borderRadius:'50%'}}/>
        <a className="navbar-brand fs-3 fw-bolder px-4 " style={{color:'white'}} href="#">Srur Production </a>
        <div className="ms-auto">
          <a href="#HomePage" className="me-3 fs-5 fw-semibold text-white text-decoration-none">Home</a>
          <a href="#About" className="me-3 fs-5 fw-semibold text-white text-decoration-none">About</a>
          <a href="#services" className="me-3 fs-5 fw-semibold text-white text-decoration-none">Services</a>
          <a href="#gallery" className="me-3 fs-5 fw-semibold text-white text-decoration-none">Gallery</a>
          <a href="#testimonials" className="me-3 fs-5 fw-semibold text-white text-decoration-none">Testimonials</a>
          <a href="#contact" className=" text-white fs-5 fw-semibold text-decoration-none">Contact</a>
        </div>
      </div>
    </nav>
  );
}
