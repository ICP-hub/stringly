import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper lg:w-screen lg:h-[550px]"
      >
        <SwiperSlide>
          <img
            src={isMobile ? "/landing/carousel1mobile.jpg" : "/landing/carousel1.jpg"}
            alt="Slide 1"
            className="rounded-4xl h-full object-cover swiper-slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={isMobile ? "/landing/carousel2mobile.jpg" : "/landing/carousel2.jpg"}
            alt="Slide 2"
            className="rounded-4xl object-cover swiper-slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={isMobile ? "/landing/carousel1mobile.jpg" : "/landing/carousel3.jpg"}
            alt="Slide 3"
            className="rounded-4xl object-cover swiper-slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="video-sliding relative swiper-slide rounded-3xl h-full md:h-[90%] lg:h-[72%]">
            <video autoPlay muted loop className="absolute rounded-3xl top-0 left-0 right-0 bottom-0 w-full h-full object-cover">
              <source src="/landing/switch_1.mp4" type="video/mp4"
              />
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
