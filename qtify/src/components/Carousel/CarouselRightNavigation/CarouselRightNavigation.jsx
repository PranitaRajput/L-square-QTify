import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";

export default function CarouselRightNavigation() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const updateNavigationState = () => setIsEnd(swiper.isEnd);

    // Attach the event listener
    swiper.on("slideChange", updateNavigationState);

    // Cleanup the event listener on component unmount
    return () => {
      swiper.off("slideChange", updateNavigationState);
    };
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && (
        <RightArrow onClick={() => swiper.slideNext()} className={styles.arrow} />
      )}
    </div>
  );
}
