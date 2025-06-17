import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from './Section';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './Swiper.css';
import img1 from'./assest/img1.jpeg';
import img2 from'./assest/img2.jpeg';
import img3 from'./assest/img3.jpeg';
import img4 from'./assest/img4.jpeg';
import img5 from'./assest/img5.jpg';
import img6 from'./assest/img6.jpeg';
import img7 from'./assest/img7.jpeg';
import img8 from'./assest/img8.jpeg';
import img9 from'./assest/img9.jpeg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { WiDayThunderstorm } from 'react-icons/wi';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Section image={img1} style= />
        </SwiperSlide>
        <SwiperSlide>
          <Section image={img2} style={{height:'20vh',Width:"70%"}}/>
        </SwiperSlide>
        <SwiperSlide><Section image={img3}style={{height:'20vh',Width:"70%"}}/> </SwiperSlide> 
        <SwiperSlide><Section image={img5}style={{height:'20vh',Width:"70%"}}/> </SwiperSlide>
        <SwiperSlide><Section image={img4}style={{height:'20vh',Width:"70%"}}/> </SwiperSlide>
        <SwiperSlide><Section image={img6}style={{height:'20vh',Width:"70%"}}/> </SwiperSlide>
        <SwiperSlide><Section image={img7}style={{height:'20vh',Width:"70%"}}/> </SwiperSlide>
        <SwiperSlide><Section image={img8}style={{height:'20vh',Width:"70%"}}/> </SwiperSlide>
        <SwiperSlide><Section image={img9}style={{height:'20vh',Width:"70%"}}/> </SwiperSlide>
      </Swiper>
    </>
  );
}
