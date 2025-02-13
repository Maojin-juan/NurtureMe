import SectionTitle from "@/components/common/SectionTitle";
import TeamSwiper from "./TeamSwiper";
import IMAGES from "@/assets/images";

function TeamContent() {
  return (
    <div className="mb-6 space-y-4 text-center text-secondary-2 xl:mb-16">
      <SectionTitle
        title="我們的團隊"
        subtitle="致力於為毛孩子們提供最好的照顧和無限的愛"
        className="text-secondary-2"
        underlineStyle={2}
      />
    </div>
  );
}

function TeamDescription() {
  return (
    <div className="relative before:absolute before:-bottom-[116px] before:left-[66px] before:-z-10 before:h-[353px] before:w-[246px] before:3xl:bg-person2">
      <div className="mx-[28px] flex justify-center xl:container xl:block">
        <p className="beforeDecoration relative mb-10 ps-4 text-primary-2 before:absolute before:left-0 before:h-full before:w-2 before:rounded-2xl before:bg-primary-4 xl:mb-12 xl:ps-[30px] xl:text-fs-3 before:xl:w-4">
          浪我包養的團隊是一群充滿熱情的動物愛好者，
          <br className="hidden sm:block" />
          包括專業的獸醫、動物行為專家、熱心志工和愛心贊助者。
        </p>
      </div>
      <TeamSwiper />
    </div>
  );
}

function WaveBottom() {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <img className="w-full" src={IMAGES.WAVE.WAVE2} alt="wave2" />
    </div>
  );
}

export default function Team() {
  return (
    <div className="beforeDecoration afterDecoration before:bg-shadow3 after:xl:bg-paw2 relative overflow-hidden py-10 before:-left-[126px] before:bottom-[238px] before:-z-10 before:h-80 before:w-[340px] before:bg-contain after:-top-[7px] after:right-[143px] after:bg-contain xl:py-[120px] before:xl:-left-[307px] before:xl:top-[486px] before:xl:h-[742px] before:xl:w-[788px] after:xl:h-[825px] after:xl:w-[1157px]">
      <TeamContent />
      <TeamDescription />
      <WaveBottom />
    </div>
  );
}
