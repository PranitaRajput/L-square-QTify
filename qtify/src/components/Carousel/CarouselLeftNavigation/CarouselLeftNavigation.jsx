import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

export default function CarouselLeftNavigation() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);

  useEffect(() => {
    const updateNavigationState = () => setIsBeginning(swiper.isBeginning);

    // Attach the event listener
    swiper.on("slideChange", updateNavigationState);

    // Cleanup the event listener on component unmount
    return () => {
      swiper.off("slideChange", updateNavigationState);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <LeftArrow onClick={() => swiper.slidePrev()} className={styles.arrow} />
      )}
    </div>
  );
}
