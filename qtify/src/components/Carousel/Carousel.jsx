// import React, { useEffect, useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";
// import { useSwiper } from "swiper/react";
// import styles from "./Carousel.module.css";
// import "swiper/css";
// import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
// import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

// const Controls = ({ data }) => {
//   const swiper = useSwiper();

//   useEffect(() => {
//     swiper.slideTo(0);
//   }, [data]);

//   return <></>;
// };

// function Carousel({ data, renderComponent }) {
//   return (
//     <div className={styles.wrapper}>
//       <Swiper
//         style={{ padding: "0px 20px" }}
//         initialSlide={0}
//         modules={[Navigation]}
//         slidesPerView={"auto"}
//         spaceBetween={40}
//         allowTouchMove
//       >
//         <Controls data={data} />
//         <div>
//           <CarouselLeftNavigation />
//           <CarouselRightNavigation />
//         </div>
//         {data.map((ele) => (
//           <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Carousel;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import styles from "./Carousel.module.css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

import "swiper/css";
import "swiper/css/navigation";

function Carousel({ data, renderComponent }) {
  if (!Array.isArray(data) || data.length === 0) {
    console.error("Carousel data is invalid or empty:", data);
    return <p>No items available for the carousel</p>;
  }

  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        modules={[Navigation]}
        navigation
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
      >
        {/* Navigation Arrows */}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />

        {/* Render SwiperSlides */}
        {data.map((ele, index) => (
          <SwiperSlide key={ele.id || index}>
            {renderComponent(ele)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;

