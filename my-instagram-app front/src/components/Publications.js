// Publications.js

import React from 'react';
import '../styles/Publications.css'; 

const Publications = () => {
  return (
    <div className="publications-container">
      <div className="publication-grid">
        <div className="publication-item">
          <img
            src="images/imagetab1.jpg"
            alt="Описание изображения 1"
            className="publication-image"
          />
        </div>
        <div className="publication-item">
          <img
            src="images/imagetab1.jpg"
            alt="Описание изображения 2"
            className="publication-image"
          />
        </div>
        <div className="publication-item">
          <img
            src="images/imagetab1.jpg"
            alt="Описание изображения 3"
            className="publication-image"
          />
        </div>
        {/* Добавьте другие изображения по аналогии */}
      </div>
    </div>
  );
};

export default Publications;
