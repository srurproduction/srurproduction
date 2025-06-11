import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Services() {
  const services = ["Branding", "Logo Design", "Social Media", "Posters", "Packaging", "UI/UX"];

  return (
    <section id="services" className="container py-5">
      <div className="row">
        {services.map((service, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{service}</Card.Title>
                <Card.Text>Check out my latest {service.toLowerCase()} work</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
