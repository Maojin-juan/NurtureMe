import { Wave2, Wave4 } from "@/components/decorative";

function GuardianHeroTitle() {
  return (
    <>
      <h4 className="text-h4 2xl:text-h1">成為毛孩子的守護英雄</h4>
      <p className="text-h8 2xl:text-h4">想要成為毛孩子的守護英雄嗎？</p>
    </>
  );
}

export default function GuardianHero() {
  return (
    <section className="relative">
      <Wave2 className="top-0 text-primary-1" />
      <div className="afterDecoration beforeDecoration relative space-y-2 overflow-hidden pb-[359px] pt-10 text-center text-primary-1 before:-top-[66px] before:left-1/2 before:-z-10 before:h-[358px] before:w-[120px] before:-translate-x-1/2 before:bg-homeGuardianHeroHand before:bg-contain after:bottom-0 after:left-1/2 after:-z-10 after:h-[88px] after:w-[346px] after:-translate-x-1/2 after:bg-homeGuardianHeroPaws after:bg-contain after:xl:h-[165px] after:xl:w-[656px] 2xl:space-y-6 2xl:pb-[781px] 2xl:pt-20 before:2xl:-top-[140px] before:2xl:h-[716px] before:2xl:w-[240px] after:2xl:h-[330px] after:2xl:w-[1312px]">
        <GuardianHeroTitle className="pt-10 xl:pt-20" />
      </div>
      <Wave4 className="-bottom-px text-primary-1" />
    </section>
  );
}
