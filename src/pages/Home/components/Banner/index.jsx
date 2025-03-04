import ASSETS from "@/assets";
import DoodleShape from "@/components/decorative/backgrounds/shapes/doodles/DoodleShape";
import { Link } from "react-router-dom";

function BannerTitle() {
  return (
    <h3 className="mb-11 flex flex-col items-center gap-y-1 whitespace-nowrap ps-6 text-h3 text-white lg:flex-row xl:mb-20 xl:ps-0 xl:text-h1 xl:leading-normal 3xl:text-heading">
      <span className="beforeDecoration before:bg-titlePaw relative me-24 before:-left-[27px] before:-top-[13px] before:h-[34px] before:w-[45px] before:bg-cover lg:me-0 before:3xl:-left-[82px] before:3xl:-top-[50px] before:3xl:h-[98px] before:3xl:w-32">
        毛孩子們的
      </span>
      <span className="relative ms-[108px] lg:ms-0">
        夢想樂園
        <div className="absolute -bottom-5 -left-2 xl:-bottom-10 xl:-left-11">
          <div className="h-[19px] w-[186px] bg-doodleUnderline1 bg-cover bg-no-repeat xl:h-9 xl:w-[380px]" />
        </div>
      </span>
    </h3>
  );
}

function BannerDescription() {
  return (
    <div className="mx-auto">
      <div className="px-6 text-fs-6 font-normal text-white md:mx-0 md:max-w-full md:px-0 md:text-fs-2">
        <div className="beforeDecoration relative space-y-4 ps-5 before:left-0 before:h-full before:w-2 before:rounded-2xl before:bg-primary-2 xl:ps-10 before:xl:w-4">
          <p>
            在浪我包養，我們的願景是為每隻毛孩子打造一個充滿愛與關懷的家園。
          </p>
          <p>
            讓每一個毛茸茸的夥伴都能感受到溫暖與快樂，我們相信你的參與可以改變牠們的一生。
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-center md:justify-start">
        <Link
          className="transition-color rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white duration-300 hover:bg-secondary-2 2xl:px-10 2xl:py-6 2xl:text-h4"
          to="/donation"
        >
          立即幫助
        </Link>
      </div>
    </div>
  );
}

export default function Banner() {
  return (
    <div className="flex flex-col items-center justify-center gap-x-[61px] overflow-hidden py-10 md:flex-row-reverse md:px-8 md:py-20 xl:pb-[138px] xl:pt-[272px] 3xl:pl-[272px] 3xl:pr-[184px]">
      <div className="relative z-10 mb-6 flex-1 items-center md:mb-0 md:px-0">
        <img
          className="h-auto w-full"
          src={ASSETS.IMAGES.HOME.HOME_HERO}
          alt="cat"
        />
        <DoodleShape className="-top-[7.32%] left-[2.40%] -z-10 w-[110.29%] md:-top-[4.78%] md:left-[3.97%]" />
      </div>
      <BannerContent />
    </div>
  );
}

function BannerContent() {
  return (
    <div className="flex-1">
      <BannerTitle />
      <BannerDescription />
    </div>
  );
}
