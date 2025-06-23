
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


const images = [img1, img2, img3, img4, img5, img6];
export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [activeImg, setActiveImg] = useState('');

  const handleShow = (img) => {
    setActiveImg(img);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <section id="gallery" className=" section-dark container-fluid py-5 text-center">
      <h2 className="mb-4 fs-1 fw-bolder gradient-text">Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div className='col-md-4 mb-4' key={index}>
            <div
              className="card shadow-sm h-100 border-0"
              style={{ cursor: 'pointer', transition: 'transform 0.3s', overflow: 'hidden' }}
              onClick={() => handleShow(image)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src={image} alt="" className='img-fluid' style={{ height: '450px', objectFit: 'cover', width: '100%' }} />

            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <img src={activeImg} alt="Full view" className="img-fluid w-100" />
        </Modal.Body>
      </Modal>

    </section>
  );
}
