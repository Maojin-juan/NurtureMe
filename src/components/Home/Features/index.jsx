import IMAGES from "@/assets/images";
import SectionTitle from "@/components/common/SectionTitle";

const features = [
  {
    image: IMAGES.FEATURES.ONLINE_SPONSOR,
    title: "線上贊助",
    description:
      "選擇你心儀的毛孩子,每月收到牠們的生活更新和可愛照片，感受到牠們的成長與變化。",
  },
  {
    image: IMAGES.FEATURES.INTERACT,
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
        <p className="text-primary-2 xl:text-fs-3">{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <>
      <img src={IMAGES.WAVE.WAVE1} alt="wave1" />
      <div className="beforeDecoration afterDecoration before:xl:bg-paw1 after:bg-shadow2 relative py-10 before:left-[95px] before:top-[39px] before:-z-10 before:w-[281px] before:bg-contain after:-right-[99px] after:bottom-[190px] after:-z-10 after:h-[270px] after:w-[300px] after:bg-contain xl:py-[120px] before:xl:h-[925px] after:2xl:-bottom-[220px] after:2xl:-right-[225px] after:2xl:h-[670px] after:2xl:w-[770px]">
        <div className="beforeDecoration container relative before:-bottom-[90px] before:-right-[208px] before:z-10 before:h-[355px] before:w-[294px] before:3xl:bg-person1">
          <SectionTitle
            title="改變生活，從心開始"
            subtitle="讓每個人都能參與到保護毛孩子的行動中來是我們的使命"
            className="text-secondary-1"
          />
          <div className="container flex flex-col gap-x-6 gap-y-8 text-center tracking-[0.02rem] text-primary-1 md:flex-row">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
