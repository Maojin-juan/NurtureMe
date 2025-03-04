import ASSETS from "@/assets";
import SectionTitle from "@/components/common/SectionTitle";
import { Wave2 } from "@/components/decorative";

const features = [
  {
    image: ASSETS.IMAGES.HOME.FEATURES.ONLINE_SPONSOR,
    title: "線上贊助",
    description:
      "選擇你心儀的毛孩子,每月收到牠們的生活更新和可愛照片，感受到牠們的成長與變化。",
  },
  {
    image: ASSETS.IMAGES.HOME.FEATURES.INTERACT,
    title: "現場互動",
    description: "與贊助對象零距離互動，給牠們帶來更多的歡樂和陪伴。",
  },
];

function FeatureCard({ image, title, description }) {
  return (
    <div className="flex flex-1 flex-col items-center">
      <img
        className="mb-4 size-40 rounded-full object-cover xl:mb-8 xl:size-[360px]"
        src={image}
        alt={title}
      />
      <div className="max-w-[416px] space-y-4 xl:space-y-6">
        <h5 className="afterDecoration relative text-h5 after:bottom-0 after:left-1/2 after:-z-10 after:h-2 after:w-32 after:-translate-x-1/2 after:rounded-2xl after:bg-primary-4 xl:text-h3 after:xl:h-4 after:xl:w-[200px]">
          {title}
        </h5>
        <p className="text-fs-6 text-primary-2 xl:text-fs-3">{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <>
      <Wave2 className="top-0 text-primary-1" />

      <div className="relative py-10 xl:py-[120px]">
        <div className="absolute left-[95px] top-[39px] -z-10">
          <div className="h-[925px] w-[281px] bg-contain bg-no-repeat xl:bg-pawsColWide" />
        </div>

        <div className="absolute -right-[99px] bottom-[190px] -z-10 2xl:-bottom-[220px] 2xl:-right-[225px]">
          <div className="h-[270px] w-[300px] bg-homeShape1 bg-contain bg-no-repeat 2xl:h-[670px] 2xl:w-[770px]" />
        </div>

        <div className="beforeDecoration container relative before:-bottom-[90px] before:-right-[208px] before:z-10 before:h-[355px] before:w-[294px] before:3xl:bg-homeCompanion1">
          <SectionTitle
            title="改變生活，從心開始"
            subtitle="讓每個人都能參與到保護毛孩子的行動中來是我們的使命"
            className="text-secondary-1"
          />
          <div className="container flex flex-col gap-x-6 gap-y-8 text-center text-primary-1 md:flex-row">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
