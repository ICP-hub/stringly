// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
// import { Pagination, Autoplay } from 'swiper/modules';

// export default function App() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <Swiper
//         effect="coverflow"
//         centeredSlides={true}
//         slidesPerView={2}
//         loop={true}
//         spaceBetween={isMobile ? 10 : 30}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             if (index < 3) {
//               return `<span class="${className}"></span>`;
//             }
//             return '';
//           },
//         }}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper lg:w-screen h-auto lg:h-[550px]"
//       >
//         <SwiperSlide>
//           <img
//             src={isMobile ? '/landing/carousel1mobile.jpg' : '/landing/carousel1.jpg'}
//             alt="Slide 1"
//             className="rounded-4xl h-full object-cover swiper-slide"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={isMobile ? '/landing/carousel2mobile.jpg' : '/landing/carousel2.jpg'}
//             alt="Slide 2"
//             className="rounded-4xl object-cover swiper-slide"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <video
//             autoPlay
//             loop
//             className="absolute top-0 left-0 w-full h-full !rounded-xl"
//           >
//             <source
//               className="rounded-3xl rounded-xl"
//               src="/landing/switch_1.mp4"
//               type="video/mp4"
//             />
//           </video>
//         </SwiperSlide>
//         <SwiperSlide>

//           </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { Pagination, Autoplay } from "swiper/modules";


// export default function App() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const [videoSrc, setVideoSrc] = useState(
//     isMobile ? "/landing/switch_mobile.mp4" : "/landing/switch_1.mp4"
//   );

//   useEffect(() => {
//     setVideoSrc(isMobile ? "/landing/switch_mobile.mp4" : "/landing/switch_1.mp4");
//   }, [isMobile]);

//   return (
//     <div>
//       <Swiper
//         effect="coverflow"
//         centeredSlides={true}
//         slidesPerView={2}
//         loop={true}
//         spaceBetween={isMobile ? 20 : -10} // Adjust spacing
//         autoplay={{
//           delay: 7000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             if (index < 3) {
//               return `<span class="${className}"></span>`;
//             }
//             return '';
//           },
//         }}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         onInit={(swiper) => setActiveIndex(swiper.realIndex)}
//         modules={[Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <img
//             src={isMobile ? "/landing/carousel1mobile.jpg" : "/landing/carousel1.jpg"}
//             alt="Slide 1"
//             className={`carousel-image ${activeIndex === 0 ? "center-slide" : "blur-slide"
//               }`}
//           />
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <img
//             src={isMobile ? "/landing/carousel2mobile.jpg" : "/landing/carousel2.jpg"}
//             alt="Slide 2"
//             className={`carousel-image ${activeIndex === 1 ? "center-slide" : "blur-slide"
//               }`}
//           />
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <video
//             key={isMobile ? "mobile" : "desktop"} 
//             autoPlay
//             muted
//             loop
//             playsInline
//             className={`carousel-image rounded-2xl ${activeIndex === 2 ? "center-slide" : "blur-slide"
//               }`}
//             poster="/path/to/fallback-image.jpg"
//           >
//             <source
//               src={isMobile ? "/landing/switch_mobile.mp4" : "/landing/switch_1.mp4"}
//               type="video/mp4"
//             />
//           </video>

//         </SwiperSlide>

//         <SwiperSlide>
//           <img
//             src={isMobile ? "/landing/carousel2mobile.jpg" : "/landing/carousel2.jpg"}
//             alt="Slide 2"
//             className={`carousel-image ${activeIndex === 3 ? "center-slide" : "blur-slide"
//               }`}
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Slide data
  const slides = [
    {
      type: "image",
      mobileSrc: "/landing/carousel1mobile.jpg",
      desktopSrc: "/landing/carousel1.jpg",
      alt: "Slide 1",
    },
    {
      type: "image",
      mobileSrc: "/landing/carousel2mobile.jpg",
      desktopSrc: "/landing/carousel2.jpg",
      alt: "Slide 2",
    },
    {
      type: "video",
      mobileSrc: "/landing/switch_mobile.mp4",
      desktopSrc: "/landing/switch_1.mp4",
      poster: "/path/to/fallback-image.jpg",
    },
    {
      type: "image",
      mobileSrc: "/landing/carousel2mobile.jpg",
      desktopSrc: "/landing/carousel2.jpg",
      alt: "Slide 3",
    },
  ];

  return (
    <div>
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        spaceBetween={isMobile ? 20 : -10}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            if (index < 3) {
              return `<span class="${className}"></span>`;
            }
            return '';
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onInit={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "image" ? (
              <img
                src={isMobile ? slide.mobileSrc : slide.desktopSrc}
                alt={slide.alt}
                className={`carousel-image ${activeIndex === index ? "center-slide" : "blur-slide"
                  }`}
              />
            ) : (
              <video
                key={isMobile ? "mobile" : "desktop"}
                autoPlay
                muted
                loop
                playsInline
                className={`carousel-image rounded-2xl ${activeIndex === index ? "center-slide" : "blur-slide"
                  }`}
                poster={slide.poster}
              >
                <source
                  src={isMobile ? slide.mobileSrc : slide.desktopSrc}
                  type="video/mp4"
                />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
