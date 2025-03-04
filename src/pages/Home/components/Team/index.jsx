import SectionTitle from "@/components/common/SectionTitle";
import TeamSwiper from "./TeamSwiper";
import { Wave3 } from "@/components/decorative";

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
    <div className="relative before:absolute before:-bottom-[116px] before:left-[66px] before:-z-10 before:h-[353px] before:w-[246px] before:bg-homeCompanion2 before:opacity-0 before:transition-opacity before:duration-300 before:3xl:opacity-30 before:[@media(min-width:1835px)]:opacity-100">
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

export default function Team() {
  return (
    <div className="beforeDecoration relative overflow-hidden py-10 xl:py-[120px]">
      <div className="absolute -top-[7px] right-[143px] -z-10">
        <div className="h-[825px] w-[1157px] bg-contain bg-no-repeat xl:bg-pawsRow" />
      </div>

      <div className="absolute -left-[126px] top-[107px] -z-10 xl:-left-[307px] xl:top-[486px]">
        <div className="h-80 w-[340px] bg-homeShape2 bg-contain bg-no-repeat xl:h-[742px] xl:w-[788px]" />
      </div>

      <TeamContent />
      <TeamDescription />

      <Wave3 className="-bottom-px text-primary-1" />
    </div>
  );
}
