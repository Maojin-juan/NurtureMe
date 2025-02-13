import IMAGES from "@/assets/images";
import { Link } from "react-router-dom";

function BannerTitle() {
  return (
    <h3 className="mb-11 flex flex-col items-center gap-y-1 whitespace-nowrap ps-6 text-h3 text-white xl:mb-20 xl:flex-row xl:ps-0 xl:text-[80px] xl:leading-[6rem]">
      <span className="beforeDecoration relative me-24 before:-left-[27px] before:-top-[13px] before:h-[34px] before:w-[45px] before:bg-titlePaw before:bg-cover xl:me-0 before:2xl:-left-[82px] before:2xl:-top-[50px] before:2xl:h-[98px] before:2xl:w-32">
        毛孩子們的
      </span>
      <span className="afterDecoration relative ms-[108px] after:-bottom-5 after:-left-2 after:h-[19px] after:w-[186px] after:bg-underline after:bg-cover xl:ms-0 after:2xl:-bottom-10 after:2xl:-left-11 after:2xl:h-9 after:2xl:w-[380px]">
        夢想樂園
      </span>
    </h3>
  );
}

function BannerDescription() {
  return (
    <div className="mx-auto max-w-[327px] xl:max-w-[723px]">
      <div className="beforeDecoration relative mx-auto max-w-[327px] space-y-4 ps-5 font-normal text-white before:left-0 before:h-full before:w-2 before:rounded-2xl before:bg-primary-2 md:mx-0 md:max-w-full xl:ps-10 xl:text-fs-2 before:xl:w-4">
        <p>在浪我包養，我們的願景是為每隻毛孩子打造一個充滿愛與關懷的家園。</p>
        <p>
          讓每一個毛茸茸的夥伴都能感受到溫暖與快樂，我們相信你的參與可以改變牠們的一生。
        </p>
      </div>
      <div className="mt-6 flex justify-center md:justify-start">
        <Link
          className="transition-ham rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white hover:bg-secondary-2 2xl:px-10 2xl:py-6 2xl:text-h4"
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
    <div className="flex flex-col items-center justify-center gap-x-[61px] overflow-x-hidden py-10 md:flex-row-reverse md:px-8 xl:pb-[138px] xl:pt-[272px] 2xl:px-20">
      <div className="afterDecoration relative z-10 flex items-center after:-top-6 after:left-2 after:-z-10 after:h-[396px] after:w-[368px] after:bg-bgShadow after:bg-cover md:px-0 2xl:h-[670px] 2xl:w-[680px] after:2xl:-top-8 after:2xl:left-[27px] after:2xl:h-[808px] after:2xl:w-[750px]">
        <img
          className="h-auto w-full"
          src={IMAGES.BANNERS.BANNER_CAT}
          alt="cat"
        />
      </div>
      <BannerContent />
    </div>
  );
}

function BannerContent() {
  return (
    <div className="mt-6 md:mt-0">
      <BannerTitle />
      <BannerDescription />
    </div>
  );
}
