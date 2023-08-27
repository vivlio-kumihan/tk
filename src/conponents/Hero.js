// 不要ではないか？
// import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';

const images = [
  { image: require("../img/230701_GX1_1020698.jpg") },
  { image: require("../img/230718_GX1_1020738.jpg") },
  { image: require("../img/230718_GX1_1020745.jpg") },
  { image: require("../img/230718_GX1_1020752.jpg") },
  { image: require("../img/230718_GX1_1020754.jpg") },
  { image: require("../img/230721_GX1_1020805.jpg") },
  { image: require("../img/230721_GX1_1020813.jpg") },
  { image: require("../img/230730_G9_2451.jpg") },
  { image: require("../img/230730_G9_2452.jpg") },
  { image: require("../img/230730_G9_2455.jpg") },
  { image: require("../img/230730_G9_2458.jpg") },
  { image: require("../img/230730_G9_2465.jpg") },
  { image: require("../img/230730_G9_2466.jpg") },
  { image: require("../img/230730_GX1_1020913.jpg") },
];

const Hero = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // breakpoints={{
        //   428: {
        //     slidesPerView: 3,
        //   }
        // }}
        // フェードが効かない。
        // effect='fade'
        // fadeEffect={{
        //   crossFade: true,
        // }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay]}
        // modules={[Autoplay, EffectFade]}
        // modules={[Autoplay, Pagination, Navigation]}
        // navigation={false}
        className="mySwiper"
      >
        <SwiperSlide><img src={images[0].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[1].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[2].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[3].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[4].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[5].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[6].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[7].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[8].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[9].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[10].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[11].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[12].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[13].image} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero