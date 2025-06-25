import React from "react";
import "./index.css";
import client1 from './assets/client1.jpg';
import client2 from './assets/client2.jpg';
import client3 from './assets/client3.jpg';

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Startup Founder",
    review: "Uganvi brought our brand to life with an incredible logo and packaging design. Her creativity and attention to detail are unmatched!",
    img: client1
  },
  {
    name: "Sneha Kapoor",
    role: "Social Media Manager",
    review: "Loved working with her! The reels and Instagram creatives were vibrant, trendy, and exactly what we needed for our campaign.",
    img: client2
  },
  {
    name: "Dev Rana",
    role: "Event Organizer",
    review: "Posters and invites were designed beautifully and delivered on time. Uganvi truly understands client vision and turns it into art!",
    img: client3
  }
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">What Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-box">
            <div className="testimonial-header">
              <img src={item.img} alt={item.name} className="testimonial-img" />
              <div>
                <h5>{item.name}</h5>
                <p className="testimonial-role">{item.role}</p>
              </div>
            </div>
            <p className="testimonial-text">"{item.review}"</p>
            <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </section>
  );
}
