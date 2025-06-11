import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function ContactForm() {
  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center mb-4">Let's Talk</h2>
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
    </section>
  );
}
