import React from 'react';
import pic from './assets/pic.jpg';
import './index.css';

export default function Header() {
  return (
    <section className="section-dark" id="header">
      <div className="container-fluid">
        <header className=" section-dark py-5 shadow-sm" style={{ padding: '80px 20px', zIndex: 99 }}>
          <div className="row d-flex align-items-center justify-content-center text-center">
            {/* LEFT SIDE */}
            <div className="col-md-8 text-md-start text-center">
              <h1 className="text-white mb-1">Hello I'm 👋</h1>
              <h1 className="gradient-text fw-bold mb-2">Uganvi Raja</h1>
              <h4 className="text-light mb-4">Graphic Designer</h4>
              <p
                className="text-light fw-normal"
                style={{ fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '700px' }}
              >
                👉 I'm a passionate graphic designer and video editor offering creative,
                high-quality design services online. I specialize in <strong>logo design</strong>, 
                <strong> branding</strong>, <strong>social media graphics</strong>, brochures, packaging,
                and much more. <br />
                My goal is to help businesses visually communicate their message and stand
                out with professional, custom designs.
              </p>
              <a
                href="https://wa.me/917324963502"
                target="_blank"
                rel="noopener noreferrer"
                className="btn fs-6 fw-medium mt-3 btn-hover-grow"
                style={{padding: '15px 10px', background: 'linear-gradient(to right, #f06292, #a445ff)', color: '#fff', }}
              >
                <i className="fa-brands fa-whatsapp me-2"></i> Contact +91 7324963502
              </a>
              <a
                href="./Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark fs-6 fw-medium mt-3 mx-3 btn-hover-grow"
                style={{padding: '15px 20px', }}
              >
                <i className="fa-solid fa-download me-2"></i> Download cv
              </a>
            
            </div>

            {/* RIGHT SIDE */}
            <div className="col-md-4 d-flex justify-content-center mt-4 mt-md-0">
              <div className="gradient-ring">
                <img src={pic} alt="profile" className="img-fluid profile-img rounded-circle border border-3 border-light" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
