import React, { useState } from 'react';
import styles from './ImageCarousel.module.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.mainImage}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className={styles.thumbnails}>
        <button className={styles.navButton} onClick={handlePrev}>
          ◀
        </button>
        <div className={styles.thumbnailContainer}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`${styles.thumbnail} ${
                currentIndex === index ? styles.thumbnailActive : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
        <button className={styles.navButton} onClick={handleNext}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
