import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = ["Branding", "Logo Design", "Social Media", "Posters", "Packaging", "UI/UX"];

  return (
    <section id="services" className="section-dark container-fluid py-5">
      <h2 className="text-center fs-1 fw-bold mb-5">My <span className="gradient-text">Services</span></h2>
      <div className="row px-3">
        {services.map((service, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <Card className="h-100 shadow-sm bg-dark text-light border border-secondary rounded-4">
              <Card.Body>
                <Card.Title className="fs-4 fw-semibold">{service}</Card.Title>
                <Card.Text>
                  <Link
                    to={`/service/${service.toLowerCase()}`}
                    className="text-info text-decoration-none"
                  >
                    Check out my latest {service.toLowerCase()} work →
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
