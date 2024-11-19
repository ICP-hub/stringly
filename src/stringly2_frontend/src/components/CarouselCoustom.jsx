import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <div>
      <Swiper
        effect="coverflow" // Enable Coverflow effect
        centeredSlides={true}
        slidesPerView={2} // Number of slides visible
        loop={true}
        spaceBetween={30} // Space between slides
        autoplay={{
          delay: 2000, // Auto-slide delay
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper lg:w-screen h-[300px] lg:h-[550px]"
      >
        <SwiperSlide>
          <img src="/landing/carousel1.jpg" alt="Slide 1" className='rounded-4xl object-cover .swiper-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/landing/carousel2.jpg" alt="Slide 2" className='rounded-4xl object-cover .swiper-slide' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/landing/carousel3.jpg" alt="Slide 3" className='rounded-4xl object-cover .swiper-slide'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/landing/carousel2.jpg" alt="Slide 4" className='rounded-4xl object-cover .swiper-slide'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
