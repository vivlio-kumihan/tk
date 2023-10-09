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
  { image: require("../img/060503_C3040Z_P1010031.jpg") },
  { image: require("../img/060503_C3040Z_P1010045.jpg") },
  { image: require("../img/110212_2124_G1_10XXXX_026.jpg") },
  { image: require("../img/110212_2124_G1_10XXXX_029.jpg") },
  { image: require("../img/110407_3004_XD_110402_009.jpg") },
  { image: require("../img/110415_3177_EM_110414_020.jpg") },
  { image: require("../img/110415_3177_EM_110415_034.jpg") },
  { image: require("../img/110415_3177_EM_110415_036.jpg") },
  { image: require("../img/130126-35770018.jpg") },
  { image: require("../img/130126-35770019.jpg") },
  { image: require("../img/130126-35770024.jpg") },
  { image: require("../img/130126-35770025.jpg") },
  { image: require("../img/130126-35770032.jpg") },
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
  { image: require("../img/230910_cp_09.jpg") },
  { image: require("../img/230910_cp_21.jpg") },
  { image: require("../img/230924_cp_28.jpg") },
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
        <SwiperSlide><img src={images[14].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[15].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[16].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[17].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[18].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[19].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[20].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[21].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[22].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[23].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[24].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[25].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[26].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[27].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[28].image} alt="" /></SwiperSlide>
        <SwiperSlide><img src={images[29].image} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero