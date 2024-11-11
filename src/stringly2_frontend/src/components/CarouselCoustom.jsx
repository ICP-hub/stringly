import React, { useState, useEffect } from "react";  

function CarouselCustom() {  
  const [activeIndex, setActiveIndex] = useState(0);  
  const images = [  
    "./carousel1.png",  
    "./carousel2.png",  
    "./carousel3.png",  
  ];  
  const totalSlides = images.length;  

  // Automatic slide change effect  
  useEffect(() => {  
    const interval = setInterval(() => {  
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);  
    }, 3000);  

    return () => clearInterval(interval); // Cleanup interval on component unmount  
  }, [totalSlides]);  

  // Transition with CSS classes for smooth animation
  const getImageStyle = (index) => ({
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (  
    <div className="relative flex items-center justify-center h-[230px] md:h-[300px] lg:h-[650px] w-full overflow-hidden my-10">  
      {/* Left Side Panel - Shows previous image with a slide effect */}
      <div  
        className={`absolute left-0 w-[20%] md:w-[30%] h-[60%] md:h-[80%] transform -translate-x-1/2 transition-all duration-700 ease-in-out rounded-xl overflow-hidden ${activeIndex === 0 ? 'opacity-40' : 'opacity-100'}`}  
        style={{  
          ...getImageStyle((activeIndex - 1 + totalSlides) % totalSlides),
        }}  
      ></div>  

      {/* Center Main Panel with sliding animation */}  
      <div className="relative w-[70%] md:w-[65%] h-[60%] md:h-[80%] overflow-hidden rounded-xl transition-transform duration-700 ease-in-out">  
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img  
              key={index}  
              src={image}  
              alt={`Slide ${index + 1}`}  
              className="w-full h-full object-cover rounded-xl"  
            />  
          ))}
        </div>
      </div>  
      
      {/* Right Side Panel - Shows next image with a slide effect */}
      <div  
        className={`absolute right-0 w-[20%] md:w-[30%] h-[60%] md:h-[80%] transform translate-x-1/2 transition-all duration-700 ease-in-out rounded-xl overflow-hidden ${activeIndex === totalSlides - 1 ? 'opacity-40' : 'opacity-100'}`}  
        style={{  
          ...getImageStyle((activeIndex + 1) % totalSlides),
        }}  
      ></div>  

      {/* Dot Indicators */}  
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">  
        {images.map((_, index) => (  
          <span  
            key={index}  
            className={`block h-2 w-2 lg:h-4 lg:w-4 rounded-full ${  
              activeIndex === index ? "bg-black" : "bg-gray-400"  
            }`}  
          />  
        ))}  
      </div>  
    </div>  
  );  
}  

export default CarouselCustom;
