import React from 'react';
import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
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
      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
