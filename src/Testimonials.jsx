import React from 'react';

export default function Testimonials() {
  const quotes = ["Amazing experience!", "Loved the branding work.", "Creative and professional!"];

  return (
    <section id="testimonials" className="bg-light py-5 text-center">
      <h2 className="mb-4">What My Clients Say</h2>
      <div className="container">
        {quotes.map((quote, i) => (
          <blockquote key={i} className="blockquote mb-4">
            <p className="fst-italic">“{quote}”</p>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
