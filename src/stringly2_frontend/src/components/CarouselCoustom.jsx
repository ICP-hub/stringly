// import React, { useState, useEffect } from "react";  

// function CarouselCustom() {  
//   const [activeIndex, setActiveIndex] = useState(0);  
//   const images = [  
//     "./carousel1.png",  
//     "./carousel2.png",  
//     "./carousel1.png",  
//     "./carousel2.png",  
//     "./carousel1.png",  
//     "./carousel2.png",  
//     "./carousel3.png",  
//   ];  
//   const totalSlides = images.length;  
//   useEffect(() => {  
//     const interval = setInterval(() => {  
//       setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);  
//     }, 3000);  

//     return () => clearInterval(interval); // Cleanup interval on component unmount  
//   }, [totalSlides]);  

//   // Transition with CSS classes for smooth animation
//   const getImageStyle = (index) => ({
//     backgroundImage: `url(${images[index]})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   });

//   return (  
//     <div className="relative flex items-center justify-center h-[230px] md:h-[300px] lg:h-[650px] w-full overflow-hidden my-10">  
//       {/* Left Side Panel - Shows previous image with a slide effect */}
//       {/* <div  
//         className={`absolute left-0 w-[20%] md:w-[30%] h-[60%] md:h-[80%] transform -translate-x-1/2 transition-all duration-700 ease-in-out rounded-xl overflow-hidden ${activeIndex === 0 ? 'opacity-40' : 'opacity-100'}`}  
//         style={{  
//           ...getImageStyle((activeIndex - 1 + totalSlides) % totalSlides),
//         }}  
//       ></div>   */}

//       {/* Center Main Panel with sliding animation */}  
//       <div className="relative w-[70%] md:w-screen h-[60%] md:h-[80%] overflow-hidden rounded-xl transition-transform duration-700 ease-in-out">  
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//         >
//           {images.map((image, index) => (
//             <img  
//               key={index}  
//               src={image}  
//               alt={`Slide ${index + 1}`}  
//               className="w-[80%] h-full object-cover rounded-xl"  
//             />  
//           ))}
//         </div>
//       </div>  
      
//       {/* Right Side Panel - Shows next image with a slide effect */}
//       {/* <div  
//         className={`absolute right-0 w-[20%] md:w-[30%] h-[60%] md:h-[80%] transform translate-x-1/2 transition-all duration-700 ease-in-out rounded-xl overflow-hidden ${activeIndex === totalSlides - 1 ? 'opacity-40' : 'opacity-100'}`}  
//         style={{  
//           ...getImageStyle((activeIndex + 1) % totalSlides),
//         }}  
//       ></div>   */}

//       {/* Dot Indicators */}  
//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">  
//         {images.map((_, index) => (  
//           <span  
//             key={index}  
//             className={`block h-2 w-2 lg:h-4 lg:w-4 rounded-full ${  
//               activeIndex === index ? "bg-black" : "bg-gray-400"  
//             }`}  
//           />  
//         ))}  
//       </div>  
//     </div>  
//   );  
// }  

// export default CarouselCustom;

// import React, { useState, useEffect } from "react";

// function CarouselCustom() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//     "./carousel1.png",
//     "./carousel2.png",
//     "./carousel3.png",
//     "./carousel1.png",
//     "./carousel2.png",
//     "./carousel3.png",
//   ];
//   const totalSlides = images.length;
//   const slidesToShow = 3; // Show 3 images at once

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, 3000);

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, [totalSlides]);

//   // Function to calculate dynamic styling for each image
//   const getImageStyle = (index) => {
//     const isCenter = index === activeIndex;
//     const isSide = index === (activeIndex + 1) % totalSlides || index === (activeIndex - 1 + totalSlides) % totalSlides;

//     return {
//       width: isCenter ? "100%" : "60%", // Center image at 100%, side images at 60%
//       height: "100%", // Maintain height of the container
//       objectFit: "cover",
//       opacity: isCenter ? 1 : 0.5, // Dim side images
//       transition: "width 0.7s ease-in-out, opacity 0.7s ease-in-out", // Smooth transition for width and opacity
//     };
//   };

//   return (
//     <div className="relative flex items-center justify-center my-10">
//       {/* Center Main Panel with fixed size container */}
//       <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
//         <div
//           className="flex gap-4 w-screen h-full transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${(activeIndex - 1) * (100 / slidesToShow)}%)`, // Adjust translateX to center the active image
//           }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${index + 1}`}
//               style={getImageStyle(index)} // Dynamically set width and opacity based on index
//               className="h-full object-cover rounded-xl transition-all duration-700"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Dot Indicators */}
//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {Array.from({ length: totalSlides }).map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setActiveIndex(index)} // Allow manual control by clicking on dots
//             className={`block h-2 w-2 lg:h-4 lg:w-4 rounded-full ${
//               activeIndex === index ? "bg-black" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CarouselCustom;


import React, { useState, useEffect } from "react";

function CarouselCustom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "./carousel1.png",
    "./carousel2.png",
    "./carousel3.png",
    "./carousel1.png",
    "./carousel2.png",
    "./carousel3.png",
  ];
  const totalSlides = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

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
    <div className="relative flex items-center justify-center my-10">
      <div className="flex gap-4 w-full h-[400px] lg:h-[500px] items-center justify-center">
        {/* Left (smaller) container */}
        <div className="w-1/3 sm:w-1/4 lg:w-1/3 h-full overflow-hidden">
          <img
            src={images[leftIndex]}
            alt={`Slide ${leftIndex + 1}`}
            className="h-full w-full object-cover opacity-50 scale-90 transition-all duration-700 rounded-xl"
          />
        </div>

        {/* Center (larger) container */}
        <div className="w-[70%] sm:w-[70%] lg:w-[60%] h-full overflow-hidden">
          <img
            src={images[centerIndex]}
            alt={`Slide ${centerIndex + 1}`}
            className="h-full w-full object-cover scale-100 transition-all duration-700 rounded-xl"
          />
        </div>

        {/* Right (smaller) container */}
        <div className="w-1/3 sm:w-1/4 lg:w-1/3 h-full overflow-hidden">
          <img
            src={images[rightIndex]}
            alt={`Slide ${rightIndex + 1}`}
            className="h-full w-full object-cover opacity-50 scale-90 transition-all duration-700 rounded-xl"
          />
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            onClick={() => setActiveIndex(index)} // Allow manual control by clicking on dots
            className={`block h-2 w-4 rounded-full ${
              activeIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselCustom;
