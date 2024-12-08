"use client"
import { useState, useEffect } from 'react';

const images = [
  'https://saya.pk/cdn/shop/files/WEBSITE-BANNER_446f5b0a-dd87-4264-acfd-c16c34833ad4_1660x.jpg?v=1728553587',
'https://saya.pk/cdn/shop/files/winter-collection-WEBSTIE-BANNER-2_1660x.jpg?v=1732692765',
'https://saya.pk/cdn/shop/files/Shawls-WEBSTIE-BANNER-psb_1660x.jpg?v=1732110912',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full h-full overflow-hidden rounded-lg shadow-lg">
      <img

        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000"
      />
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
      </button>
      <button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
      >
      </button>
    </div>
  );
};

export default function Crausols() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-1">
      <Carousel />
    </div>
  );
}





















