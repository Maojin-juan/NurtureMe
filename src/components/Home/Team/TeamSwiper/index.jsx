import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { teamSlides } from "./data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TeamSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const teamSwiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      teamSwiper.destroy();
    };
  }, []);

  return (
    <div className="relative px-[28px] 2xl:container">
      <div
        ref={swiperRef}
        className="teamSwiper relative overflow-x-hidden pb-12 xl:pb-[72px]"
      >
        <div className="swiper-wrapper">
          {teamSlides.map((slide, index) => (
            <div key={index} className="swiper-slide">
              <img
                className="mx-auto mb-4 size-40 rounded-full object-cover xl:mb-6 xl:size-[200px]"
                src={slide.img}
                alt={slide.members}
              />
              <div className="px-3 xl:px-4">
                <h6 className="mb-3 border-b border-primary-4 pb-3 text-center text-h7 text-primary-1 xl:text-h4">
                  {slide.members}
                </h6>
                <p className="text-fs-6 text-primary-3 xl:text-fs-4">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination !bottom-0 py-1 xl:py-2"></div>
      </div>
      <div className="hidden 3xl:block">
        <div className="swiper-button-next !-right-14 !top-[175px] !mt-0 !size-20 bg-arrowNext bg-cover after:hidden" />
        <div className="swiper-button-prev !-left-14 !top-[175px] !mt-0 !size-20 bg-arrowPrev bg-cover after:hidden" />
      </div>
    </div>
  );
}
