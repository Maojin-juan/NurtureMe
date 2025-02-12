import IMAGES from "@/assets/images";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>浪我包養</title>
        <meta name="description" content="毛孩子們的夢想樂園" />
      </Helmet>

      <main className="relative bg-primary-1">
        <div className="flex flex-col items-center justify-center gap-x-[61px] overflow-x-hidden py-10 md:flex-row-reverse md:px-8 xl:pb-[138px] xl:pt-[272px] 2xl:px-20">
          <div className="afterDecoration relative z-10 flex items-center after:-top-6 after:left-2 after:-z-10 after:h-[396px] after:w-[368px] after:bg-bgShadow after:bg-cover md:px-0 2xl:h-[670px] 2xl:w-[680px] after:2xl:-top-8 after:2xl:left-[27px] after:2xl:h-[808px] after:2xl:w-[750px]">
            <img
              className="h-auto w-full"
              src={IMAGES.BANNERS.BANNER_CAT}
              alt="cat"
            />
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="mb-11 flex flex-col items-center gap-y-1 whitespace-nowrap ps-6 text-h3 text-white xl:mb-20 xl:flex-row xl:ps-0 xl:text-[80px] xl:leading-[6rem]">
              <span className="beforeDecoration relative me-24 before:-left-[27px] before:-top-[13px] before:h-[34px] before:w-[45px] before:bg-titlePaw before:bg-cover xl:me-0 before:2xl:-left-[82px] before:2xl:-top-[50px] before:2xl:h-[98px] before:2xl:w-32">
                毛孩子們的
              </span>
              <span className="afterDecoration relative ms-[108px] after:-bottom-5 after:-left-2 after:h-[19px] after:w-[186px] after:bg-underline after:bg-cover xl:ms-0 after:2xl:-bottom-10 after:2xl:-left-11 after:2xl:h-9 after:2xl:w-[380px]">
                夢想樂園
              </span>
            </h3>
            <div className="mx-auto max-w-[327px] xl:max-w-[723px]">
              <div className="beforeDecoration relative mx-auto max-w-[327px] space-y-4 ps-5 font-normal text-white before:left-0 before:h-full before:w-2 before:rounded-2xl before:bg-primary-2 md:mx-0 md:max-w-full xl:ps-10 xl:text-fs-2 before:xl:w-4">
                <p>
                  在浪我包養，我們的願景是為每隻毛孩子打造一個充滿愛與關懷的家園。
                </p>
                <p>
                  讓每一個毛茸茸的夥伴都能感受到溫暖與快樂，我們相信你的參與可以改變牠們的一生。
                </p>
              </div>
              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  className="transition-ham rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white hover:bg-secondary-2 2xl:px-10 2xl:py-6 2xl:text-h4"
                  href="donation.html"
                >
                  立即幫助
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="relative z-10 overflow-x-hidden">
        <div className="beforeDecoration afterDecoration relative py-10 before:left-[95px] before:top-[39px] before:-z-10 before:w-[281px] before:bg-contain after:-right-[99px] after:bottom-[190px] after:-z-10 after:h-[270px] after:w-[300px] after:bg-[url('/assets/svg/bgShadow/bgShadow1.svg')] after:bg-contain xl:py-[120px] before:xl:h-[925px] before:xl:bg-[url('/assets/svg/paw/paw1.svg')] after:2xl:-bottom-[220px] after:2xl:-right-[225px] after:2xl:h-[670px] after:2xl:w-[770px]">
          <div className="beforeDecoration container relative before:-bottom-[90px] before:-right-[208px] before:z-10 before:h-[355px] before:w-[294px] before:3xl:bg-[url('/assets/svg/illust/person1.svg')]">
            <div className="mb-6 space-y-4 text-center text-secondary-1 xl:mb-20 xl:space-y-2">
              <h4 className="afterDecoration relative text-h4 after:-bottom-1.5 after:left-1/2 after:-z-10 after:h-[18px] after:w-80 after:-translate-x-1/2 after:bg-[url('/assets/svg/underline/underline1.svg')] after:bg-contain xl:text-h1 after:xl:h-[34px] after:xl:w-[620px]">
                改變生活，從心開始
              </h4>
              <p className="font-bold leading-[1.2rem] tracking-[0.04rem] xl:text-h5">
                讓每個人都能參與到保護毛孩子的行動中來是我們的使命
              </p>
            </div>
            <div className="container flex flex-col gap-x-6 gap-y-8 text-center tracking-[0.02rem] text-primary-1 md:flex-row">
              <div className="flex flex-1 flex-col items-center">
                <img
                  className="mb-4 size-40 rounded-full object-cover xl:mb-8 xl:size-[360px]"
                  src="/assets/images/index/rupixen-Q59HmzK38eQ-unsplash.jpg"
                  alt=""
                />
                <div className="max-w-[416px] space-y-4 xl:space-y-6">
                  <h5 className="afterDecoration relative text-h5 after:bottom-0 after:left-1/2 after:-z-10 after:h-2 after:w-32 after:-translate-x-1/2 after:rounded-2xl after:bg-primary-4 xl:text-h3 after:xl:h-4 after:xl:w-[200px]">
                    線上贊助
                  </h5>
                  <p className="text-primary-2 xl:text-fs-3">
                    選擇你心儀的毛孩子,每月收到牠們的生活更新和可愛照片，感受到牠們的成長與變化。
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <img
                  className="mb-4 size-40 rounded-full object-cover xl:mb-8 xl:size-[360px]"
                  src="/assets/images/index/yerlin-matu-GtwiBmtJvaU-unsplash.jpg"
                  alt=""
                />
                <div className="max-w-[416px] space-y-4 xl:space-y-6">
                  <h5 className="afterDecoration relative text-h5 after:bottom-0 after:left-1/2 after:-z-10 after:h-2 after:w-32 after:-translate-x-1/2 after:rounded-2xl after:bg-primary-4 xl:text-h3 after:xl:h-4 after:xl:w-[200px]">
                    現場互動
                  </h5>
                  <p className="text-primary-2 xl:text-fs-3">
                    與贊助對象零距離互動，給牠們帶來更多的歡樂和陪伴。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="beforeDecoration afterDecoration relative overflow-hidden py-10 before:-left-[126px] before:bottom-[238px] before:-z-10 before:h-80 before:w-[340px] before:bg-[url('/assets/svg/bgShadow/bgShadow2.svg')] before:bg-contain after:-top-[7px] after:right-[143px] after:bg-contain xl:py-[120px] before:xl:-left-[307px] before:xl:top-[486px] before:xl:h-[742px] before:xl:w-[788px] after:xl:h-[825px] after:xl:w-[1157px] after:xl:bg-[url('/assets/svg/paw/paw2.svg')]">
          <div className="mb-6 space-y-4 text-center text-secondary-2 xl:mb-16">
            <h4 className="afterDecoration relative text-h4 after:-bottom-1.5 after:left-1/2 after:-z-10 after:h-[18px] after:w-[186px] after:-translate-x-1/2 after:bg-[url('/assets/svg/underline/underline2.svg')] after:bg-contain xl:text-h1 after:xl:h-[35px] after:xl:w-[349px]">
              我們的團隊
            </h4>
            <p className="font-bold leading-[1.2rem] tracking-[0.04rem] xl:text-h5">
              致力於為毛孩子們提供最好的照顧和無限的愛
            </p>
          </div>
          <div className="relative before:absolute before:-bottom-[116px] before:left-[66px] before:-z-10 before:h-[353px] before:w-[246px] before:3xl:bg-[url('/assets/svg/illust/person2.svg')]">
            <div className="mx-[28px] flex justify-center xl:container xl:block">
              <p className="beforeDecoration relative mb-10 ps-4 text-primary-2 before:absolute before:left-0 before:h-full before:w-2 before:rounded-2xl before:bg-primary-4 xl:mb-12 xl:ps-[30px] xl:text-fs-3 before:xl:w-4">
                浪我包養的團隊是一群充滿熱情的動物愛好者，
                <br className="hidden sm:block" />
                包括專業的獸醫、動物行為專家、熱心志工和愛心贊助者。
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <img
              className="w-full"
              src="/assets/svg/wave/wave3.svg"
              alt="wave2"
            />
          </div>
        </div>
      </section>

      <article className="afterDecoration relative space-y-8 bg-primary-1 pb-10 pt-20 after:bottom-[91px] after:right-[78px] after:h-[326px] after:w-[356px] xl:space-y-16 xl:py-20 after:3xl:bg-[url('/assets/svg/illust/person3.svg')]">
        <div className="text-center text-white">
          <h4 className="text-h4 xl:text-h2">夢想起飛的旅程</h4>
          <p className="font-bold leading-[1.2rem] tracking-[0.04rem] xl:text-h4">
            浪我包養的故事從一個簡單的夢想開始...
          </p>
        </div>
        <div className="hidden items-center justify-center 2xl:flex">
          <a
            className="inline-block rounded-2xl bg-white px-6 py-4 text-h7 text-primary-2 xl:px-10 xl:py-6 xl:text-h4"
            href="#"
          >
            更多創辦故事
          </a>
        </div>
      </article>

      <section className="relative">
        <div className="afterDecoration beforeDecoration relative space-y-2 pb-[359px] pt-10 text-center text-primary-1 before:-top-[66px] before:left-1/2 before:-z-10 before:h-[358px] before:w-[120px] before:-translate-x-1/2 before:bg-[url('/assets/svg/guardianHeroes/hands.svg')] before:bg-contain after:bottom-0 after:left-1/2 after:-z-10 after:h-[88px] after:w-[346px] after:-translate-x-1/2 after:bg-[url('/assets/svg/guardianHeroes/catPaws.svg')] after:bg-contain after:xl:h-[165px] after:xl:w-[656px] 2xl:space-y-6 2xl:pb-[781px] 2xl:pt-20 before:2xl:-top-[140px] before:2xl:h-[716px] before:2xl:w-[240px] after:2xl:h-[330px] after:2xl:w-[1312px]">
          <h4 className="text-h4 2xl:text-h1">成為毛孩子的守護英雄</h4>
          <p className="leading-[1.2rem ] font-bold tracking-[0.04rem] 2xl:text-h4">
            想要成為毛孩子的守護英雄嗎？
          </p>
        </div>
      </section>
    </>
  );
}
