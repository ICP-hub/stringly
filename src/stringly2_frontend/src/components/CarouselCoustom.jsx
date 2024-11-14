import React, { useState, useEffect } from "react";

function CarouselCustom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "./carousel1.png",
    "./carousel2.png",
    "./carousel3.png",
  ];
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalSlides]);

  // Calculate the index of the left, center, and right images
  const getIndices = () => {
    const leftIndex = (activeIndex - 1 + totalSlides) % totalSlides;
    const rightIndex = (activeIndex + 1) % totalSlides;
    return { leftIndex, activeIndex, rightIndex };
  };

  const { leftIndex, activeIndex: centerIndex, rightIndex } = getIndices();

  return (
    <div className="relative flex items-center justify-center my-10 py-8">
      <div className="flex gap-4 w-full h-[200px] md:h-[250px] lg:h-[400px] items-center justify-center">
        {/* Left (smaller) container */}
        <div className="w-1/3 sm:w-1/4 lg:w-1/3 h-full overflow-hidden">
          <img
            src={images[leftIndex]}
            alt={`Slide ${leftIndex + 1}`}
            className="h-full w-full object-cover opacity-50 scale-90 transition-all duration-900 rounded-xl"
          />
        </div>

        {/* Center (larger) container */}
        <div className="w-[70%] sm:w-[70%] lg:w-[100%] h-full overflow-hidden">
          <img
            src={images[centerIndex]}
            alt={`Slide ${centerIndex + 1}`}
            className="h-full w-full object-cover scale-100 transition-all duration-900 rounded-xl"
          />
        </div>

        {/* Right (smaller) container */}
        <div className="w-1/3 sm:w-1/4 lg:w-1/3 h-full overflow-hidden">
          <img
            src={images[rightIndex]}
            alt={`Slide ${rightIndex + 1}`}
            className="h-full w-full object-cover opacity-50 scale-90 transition-all duration-900 rounded-xl"
          />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)} // Allow manual control by clicking on dots
            className={`block h-2 w-2 lg:h-4 lg:w-4 rounded-full ${
              activeIndex === index ? "bg-black w-5 lg:w-8" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselCustom;
