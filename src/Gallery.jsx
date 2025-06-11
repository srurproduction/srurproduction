import React from 'react';

export default function Gallery() {
  return (
    <section id="gallery" className="container py-5 text-center">
      <h2 className="mb-4">Gallery</h2>
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((img) => (
          <div className="col-md-4 mb-3" key={img}>
            <div className="bg-secondary rounded-3" style={{ height: '200px' }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
