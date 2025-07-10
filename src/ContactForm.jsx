import React, { useRef } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText("https://t.me/srurproduction");
    alert("Link copied to clipboard!");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_cm1eve6',      
      'template_cmpy38p',   
      form.current,
      { publicKey: 'DFadBcOb7h3wGmQZG' }  
    ).then(
      () => {
        alert("Message sent successfully ✅");
      },
      (error) => {
        alert("FAILED ❌: " + error.text);
      }
    );
  };

  return (
    <section id="contact" className="section-dark container-fluid py-5">
      <h1 className="text-center section-title fs-1 fw-bolder mb-4 underline-style">Get In Touch</h1>
      <div className="container-fluid">
        <div className="row">
          {/* LEFT SIDE: FORM */}
          <div className="col-lg-6 col-md-6">
            <h2 className="text-center fw-semibold mb-4">Send me a message</h2>
            <h4 className="text-center mb-4">Fill out the form below and I'll get back to you as soon as possible.</h4>

            <Form className="mx-auto" style={{ maxWidth: '500px' }} ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" name="user_name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" name="user_email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" name="message" required />
              </Form.Group>
              <Button type="submit" variant="danger" className="w-100">Send Message</Button>
            </Form>
          </div>

          {/* RIGHT SIDE: TELEGRAM CARD */}
          <div className="col-lg-6 col-md-6">
            <Card className="p-4 rounded-4 shadow bg-dark text-light">
              <h2 className="text-center fw-bold mb-3">Want to work together?</h2>
              <h5 className="text-center text-secondary mb-4">
                Drop me a message on Telegram or use the contact form — I'll get back ASAP.
              </h5>

              <div className="d-flex justify-content-between align-items-center p-3 rounded mb-3" style={{ backgroundColor: "#d9d9d9" }}>
                <span className="text-dark">
                  <i className="fab fa-telegram text-info me-2"></i>
                  <strong>https://t.me/srurproduction</strong>
                </span>
                <Button variant="outline-dark" size="sm" onClick={handleCopy}>Copy</Button>
              </div>

              <div className="d-grid gap-2 mb-3">
                <Button variant="danger">
                  <i className="fab fa-telegram me-2"></i>DM on Telegram
                </Button>
                <Button variant="secondary" className="text-dark">
                  <i className="fa-solid fa-envelope me-2"></i>Send Email
                </Button>
              </div>

              <p className="text-center text-muted small mb-0">Usually respond within 24 hours</p>
              <p className="text-center text-muted small">Open to freelance projects and collaboration opportunities</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
