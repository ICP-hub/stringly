import { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";

function CarouselCustomArrows() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3; // Update this if you add more images
  const images = [
    "./carousel1.png",
    "./carousel2.png",
    "./carousel3.png",
  ];

  // Automatically change slide every second
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Change image every second

    return () => clearInterval(interval); // Cleanup the interval
  }, [totalSlides]);


  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <div className="my-10 relative px-8  lg:w-[1200px] h-auto overflow-hidden">
      <div className="relative w-full overflow-hidden bg-black rounded-xl">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Slide ${index + 1}`}
              className="w-full lg:h-[719px] object-cover rounded-xl opacity-[0.7]"
            />
          ))}
        </div>
      </div>


      {/* Previous and Next Buttons */}
      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handlePrev}
        className="!absolute top-2/4 left-4 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </IconButton>

      <IconButton
        variant="text"
        color="white"
        size="lg"
        onClick={handleNext}
        className="!absolute top-2/4 !right-4 -translate-y-2/4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </IconButton>

      {/* Dot Indicators */}
      <div className="absolute bottom-[10px] lg:bottom-[40px] left-1/2 transform -translate-x-1/2 flex space-x-2 " >
        {images.map((_, index) => (
          <span
            key={index}
            className={`block lg:h-8 h-4 lg:w-8 w-4 rounded-full ${activeIndex === index ? "bg-black" : "bg-gray-400"
              } `}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselCustomArrows;
