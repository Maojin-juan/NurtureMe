import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { storySlides } from "./data";
import "swiper/css";
import "swiper/css/pagination";

export default function StorySwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Pagination, Autoplay],
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
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="relative border-t border-primary-3 px-[10.5px] pt-4 xl:pt-12">
        <div className="storySwiper relative overflow-x-hidden pb-12 2xl:pb-0">
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              {storySlides.map((slide, index) => (
                <div key={index} className="swiper-slide px-3">
                  <img
                    className="mx-auto mb-6 size-[306px] rounded-xl object-cover xl:size-[282px]"
                    src={slide.img}
                    alt="storyCover"
                  />
                  <div>
                    <h6 className="pb-2 text-h7 text-white xl:pb-6 xl:text-h5">
                      {slide.time}
                    </h6>
                    <p className="text-fs-6 text-primary-4">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination !bottom-0 py-1 2xl:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
