import React, { useState, useEffect } from 'react';

// Sample images for the slider
const images = [
  "./images/french-fries.png",
  "./images/french-fries.png",
  '/path/to/image3.jpg',
  '/path/to/image4.jpg',
  '/path/to/image5.jpg',
];

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Responsive settings for different screen sizes
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setSlidesToShow(1);
      } else if (width < 600) {
        setSlidesToShow(2);
      } else if (width < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };
    
    handleResize(); // Set initial slidesToShow based on initial screen size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigate to the next slide
  const nextSlide = () => {
    if (currentIndex < images.length - slidesToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex items-center">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
        >
          &#8592;
        </button>

        {/* Slider Images */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(100 / slidesToShow) * currentIndex}%)`,
              width: `${(100 / slidesToShow) * images.length}%`,
            }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="p-2"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= images.length - slidesToShow}
          className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}



export default ProductSlider;

