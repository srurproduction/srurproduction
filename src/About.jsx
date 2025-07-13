import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPalette, FaCoffee, FaSmile, FaClock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <section className="section-dark" id="About" style={{fontFamily: '"Tangerine", cursive', fontWeight: '500'}}>
      <Container>
        <h2 className="text-center fs-1 mb-4 fw-bolder" >About <span className="gradient-text">Me</span></h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="fs-5 fw-medium">Hi, I'm <strong>Uganvi Raja</strong>, a passionate Graphic Designer and video Editor who loves turning ideas into vibrant visuals. I specialize in <strong>branding, logo design, social media creatives</strong>, and more.</p>
            <p>I blend modern aesthetics with meaningful design, constantly exploring new trends, fonts, and color palettes.</p>
            <p>Beyond design, I enjoy mentoring new creatives, sipping coffee ☕, and doodling fresh ideas ✍️</p>
          </Col>

          <Col md={6}>
            <Row>
              <Col sm={6} className="mb-3">
                <Card className="text-center bg-dark text-white">
                  <Card.Body>
                    <FaPalette size={30} className="mb-2" style={{ color: "#ff007a" }}/>
                    <h4 className="gradient-text fs-2">70+</h4>
                    <p style={{color:'#A1A1AA'}}>Design Projects</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-3">
                <Card className="text-center bg-dark text-white">
                  <Card.Body>
                    <FaCoffee size={30} className="mb-2"style={{ color: "#ff007a" }} />
                    <h4 className="gradient-text fs-3">∞</h4>
                    <p style={{color:'#A1A1AA'}}>Cups of Coffee</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-3">
                <Card className="text-center bg-dark text-white">
                  <Card.Body>
                    <FaSmile size={30} className="mb-2" style={{ color: "#ff007a" }} />
                    <h4 className="gradient-text fs-2">30+</h4>
                    <p style={{color:'#A1A1AA'}}>Happy Clients</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} className="mb-3">
                <Card className="text-center bg-dark text-white">
                  <Card.Body>
                    <FaClock size={30} className="mb-2" style={{ color: "#ff007a" }} />
                    <h4 className="gradient-text fs-2">2+</h4>
                    <p style={{color:'#A1A1AA'}}>Years Experience</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
