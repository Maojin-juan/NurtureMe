import { bannerSlides } from "../../data/bannerSlides.json";
import { useSwiper } from "@/hooks/useSwiper";
import { swiperConfigs } from "@/configs/swiperConfig";
import NavigationButtons from "@/pages/Home/components/Team/NavigationButtons";
import { Wave3 } from "@/components/decorative";
import ASSETS from "@/assets";

export default function NewsBanner() {
  const { swiperRef, pauseAutoplay, resumeAutoplay } = useSwiper(
    swiperConfigs.news,
  );

  const newsSwiperBanner = {
    banner1: ASSETS.IMAGES.NEWS.BANNER_1,
    banner2: ASSETS.IMAGES.NEWS.BANNER_2,
    banner3: ASSETS.IMAGES.NEWS.BANNER_3,
  };

  return (
    <section
      ref={swiperRef}
      className="team-swiper relative -mt-[60px] h-[400px] overflow-hidden lg:h-[720px]"
      onMouseEnter={() => pauseAutoplay()}
      onMouseLeave={() => resumeAutoplay()}
    >
      <div className="swiper-wrapper absolute h-full w-full">
        {bannerSlides.map((slide) => (
          <div
            key={slide.id}
            className="swiper-slide relative flex h-full w-full flex-col justify-center pt-[157px] lg:pt-[226px] xl:justify-start"
          >
            <img
              src={newsSwiperBanner[slide.img]}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="container z-10 grid grid-cols-12 gap-4">
              <div className="z-10 col-span-12 lg:col-span-8">
                <time className="mb-2 text-h7 text-white lg:text-h3">
                  {slide.date}
                </time>
                <h2 className="mb-4 text-h5 text-white lg:mb-8 lg:text-h1">
                  {slide.title}
                </h2>
                <p className="line-clamp-3 text-fs-7 text-white lg:text-fs-3">
                  {slide.description}
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-primary-1 bg-opacity-30" />
          </div>
        ))}
      </div>

      <div className="swiper-pagination mb-[8px] lg:mb-16" />

      <div className="hidden 2xl:block">
        {/* <button
          className="swiper-button-next absolute !right-[10%] !size-[80px] rounded-full bg-white bg-opacity-50 p-4 transition-opacity after:!content-none hover:bg-opacity-70"
          aria-label="下一張幻燈片"
        >
          <ArrowRight />
        </button>
        <button
          className="swiper-button-prev absolute !left-[10%] !size-[80px] rounded-full bg-white bg-opacity-50 p-4 transition-opacity after:!content-none hover:bg-opacity-70"
          aria-label="上一張幻燈片"
        >
          <ArrowLeft />
        </button> */}
      </div>
      <NavigationButtons />

      <div className="z-10 hidden hover:cursor-pointer 3xl:block">
        <div className="swiper-button-next absolute !mt-0 !size-20 bg-arrowNext bg-cover after:hidden hover:cursor-pointer" />
        <div className="swiper-button-prev absolute right-0 !mt-0 !size-20 bg-arrowPrev bg-cover after:hidden" />
      </div>

      <Wave3 className="-bottom-px z-10 text-primary-4" />
    </section>
  );
}
