import React from 'react';
import { useParams } from 'react-router-dom';

export default function ServiceDetail() {
  const { name } = useParams(); // URL se 'branding' ya 'logo-design' milega

  // Image ke paths banate hain
  const imageList = [1, 2, 3].map(num => `/assets/${name}/${num}.jpg`);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-capitalize">{name} Work</h2>

      <div className="row">
        {imageList.map((imgPath, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <img src={imgPath} alt="work" className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
  );
}
