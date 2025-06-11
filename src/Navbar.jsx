import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">RiyaDesigns</a>
        <div className="ms-auto">
          <a href="#services" className="me-3 text-decoration-none">Services</a>
          <a href="#gallery" className="me-3 text-decoration-none">Gallery</a>
          <a href="#testimonials" className="me-3 text-decoration-none">Testimonials</a>
          <a href="#contact" className="text-decoration-none">Contact</a>
        </div>
      </div>
    </nav>
  );
}
