import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
  const scrollToTop = ()=>{
    window.scrollTo({
      top:'0',
      behaviour: 'smooth'
    })
  }
   <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="2%" y1="65%" x2="98%" y2="35%">
            <stop offset="5%" stopColor="#ffff77"></stop>
            <stop offset="95%" stopColor="#5e2903"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 L 0,187 C 183,161.5 366,136 606,136 C 846,136 1143,161.5 1440,187 L 1440,500 L 0,500 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
  return (
    <footer className="footer">
      <div className="social-icons d-flex justify-content-center mt-3" style={{ gap: '10px', }}>
        <a href="https://www.instagram.com/srurproduction?igsh=bTR5bzAwMXhjMTB3"><i className='fab fa-instagram'></i></a>
        <a href="https://whatsapp.com/channel/0029Vb2XUIk05MUjLAO9ii3P"><i className='fab fa-whatsapp'></i></a>
          <a href="https://www.linkedin.com/in/mr-uganvi-raja-44632b36b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className='fab fa-linkedin-in'></i></a> 
          <a href="https://www.facebook.com/share/19D54cFHAB/"><i className='fab fa-facebook-f'></i></a>
          <a href="https://t.me/srurproduction"><i className='fab fa-telegram'></i></a>
          <a href="https://youtube.com/@m.srurproduction"><i className='fab fa-youtube'></i></a>
      </div>
      <div>
        <p className="mt-3 mx-2 text-decoration-none text-center fs-4">© 2025 Srur Production. All rights reserved.</p>
      </div>
      <p className='mt-2 text-center fs-5'>Created with <span className="heart">❤️</span> by <strong> Uganvi Raja</strong> | Graphic Designer  |Video Editior</p>
      <div className="d-flex justify-content-center mt-3">
        <button className="back-to-top fa-2 fw-medium" onClick={scrollToTop} style={{ borderRadius: '35px', padding: '10px' }}>Back to top ↑</button>
      </div>
    </footer>
  );
}
