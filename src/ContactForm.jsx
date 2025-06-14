import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import { Card } from 'react-bootstrap';


export default function ContactForm() {
  const handleCopy = () => {
    navigator.clipboard.writeText("https://t.me/srurproduction");
    alert("Link copied to clipboard!");
  };
  return (
    <section id="contact" className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa',padding:'40px' }}>
      <h1 className='text-center  fs-1 fw-bolder mb-4 underline-style'>Get In Touch</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
      <h2 className="text-center fw-semibold mb-4">Send me a message</h2>
      <h4 className="text-center mb-4">Fill out the form below and I'll get back to you as soon as possible.</h4>
      <Form className="mx-auto" style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={4} placeholder="Your Message" />
        </Form.Group>
        <Button variant="danger" className="w-100">Send Message</Button>
      </Form>
      </div>

<div className="col-6">
      <Card className=" p-5 rounded-4 shadow">
        <h2 className="text-center fw-bold mb-3">Want to work together?</h2>
        <h5 className="text-center text-secondary mb-4">
          Drop me a message on Telegram or use the contact form — I'll get back ASAP.
        </h5>

        <div
          className="d-flex justify-content-between align-items-center p-3 rounded mb-3"
          style={{ backgroundColor: "#d9d9d9" }}
        >
          <span className="text-dark">
            <i className="fab fa-telegram text-info me-2"></i>
            <strong>https://t.me/srurproduction</strong>
          </span>
          <Button variant="outline-dark" size="sm" onClick={handleCopy}>
            Copy
          </Button>
        </div>

        <div className="d-grid gap-2 mb-3">
          <Button variant="danger">
            <i className="fab fa-telegram me-2"></i>DM on Telegram
          </Button>
          <Button variant="secondary" className="text-dark">
            <i className="fa-solid fa-envelope me-2"></i>Send Email
          </Button>
        </div>

        <p className="text-center text-muted small mb-0">
          Usually respond within 24 hours
        </p>
        <p className="text-center text-muted small">
          Open to freelance projects and collaboration opportunities
        </p>
      </Card>
    </div>
      </div>
      </div>
    </section>
  );
}
