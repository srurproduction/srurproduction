import React from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Gallery from './Gallery.jsx';
import Testimonials from './Testimonials.jsx';
import ContactForm from './ContactForm.jsx';
import Footer from './Footer.jsx';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
