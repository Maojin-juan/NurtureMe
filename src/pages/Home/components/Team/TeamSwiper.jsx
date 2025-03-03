import ASSETS from "@/assets";
import { useSwiper } from "@/hooks/useSwiper";
import { swiperConfigs } from "@/configs/swiperConfig";
import { teamSlides } from "./teamData.json";
import TeamSlide from "./TeamSlide";
import NavigationButtons from "./NavigationButtons";

export default function TeamSwiper() {
  const teamImages = {
    expert: ASSETS.IMAGES.HOME.TEAM.EXPERT,
    sponsor: ASSETS.IMAGES.HOME.TEAM.SPONSOR,
    vet: ASSETS.IMAGES.HOME.TEAM.VET,
  };

  const { swiperRef, pauseAutoplay, resumeAutoplay } = useSwiper(
    swiperConfigs.team,
  );

  return (
    <div
      className="relative px-[28px] 2xl:container"
      onMouseEnter={() => pauseAutoplay()}
      onMouseLeave={() => resumeAutoplay()}
    >
      <div
        ref={swiperRef}
        className="team-swiper relative overflow-x-hidden pb-12 xl:pb-[72px]"
      >
        <div className="swiper-wrapper">
          {teamSlides.map((slide, index) => (
            <TeamSlide key={index} {...slide} teamImages={teamImages} />
          ))}
        </div>
        <div className="swiper-pagination !bottom-0 py-1 xl:py-2" />
      </div>
      <NavigationButtons />
    </div>
  );
}
