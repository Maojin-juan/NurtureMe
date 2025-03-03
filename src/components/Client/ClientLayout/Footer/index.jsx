import ASSETS from "@/assets";

export default function Footer() {
  return (
    <footer className="z-0 mt-auto bg-primary-1">
      <div
        className={`afterDecoration after:xl:bg-homeCompanion4 relative overflow-y-hidden py-10 after:-bottom-[63px] after:right-[86px] after:h-[339px] after:w-[211px] xl:py-20`}
      >
        <div className="flex flex-col gap-y-10 lg:container lg:flex-row-reverse lg:justify-between">
          <div className="flex flex-col items-center gap-y-4 px-[27.5px] lg:items-end lg:px-0">
            <label className="flex" htmlFor="subscribe">
              <input
                className="w-full max-w-[328px] rounded-s-2xl px-6 py-[13px] text-fs-5"
                type="e-mail"
                placeholder="您的電子郵件"
                id="subscribe"
                name="subscribe"
              />
              <input
                className="rounded-e-2xl bg-secondary-1 px-6 py-4 text-h7 text-white"
                type="button"
                value="訂閱"
                name="subscribeButton"
              />
            </label>
            <div className="lg:vertical-text z-10 flex flex-col items-center text-fs-5 text-white lg:items-start lg:gap-y-3">
              <p>因為有你的包養</p>
              <p>流浪不再</p>
            </div>
          </div>
          <div className="space-y-6 px-[27.5px]">
            <a href="/index.html">
              <img
                className="mx-auto h-16 px-10"
                src={ASSETS.ICONS.LOGO}
                alt="FooterLogo"
              />
            </a>
            <div className="flex justify-center text-primary-4">
              <address className="text-fs-6 not-italic">
                <a href="#" className="block">
                  地址：快樂市寵物區幸福路555號
                </a>
                <a href="tel:0412340000" className="block">
                  電話：04-12340000
                </a>
                <a href="mailto:nurture_me&#64;gmail.com" className="block">
                  E-mail：nurture_me&#64;gmail.com
                </a>
              </address>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <p className="text-h8 text-white xl:text-h6">追蹤我們</p>
              <div className="flex gap-x-4">
                <a href="#">
                  <img src={ASSETS.ICONS.SOCIAL.FACEBOOK} alt="FacebookLink" />
                </a>
                <a href="#">
                  <img
                    src={ASSETS.ICONS.SOCIAL.INSTAGRAM}
                    alt="InstagramLink"
                  />
                </a>
                <a href="#">
                  <img src={ASSETS.ICONS.SOCIAL.YOUTUBE} alt="YoutubeLink" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-fs-8 text-primary-4 lg:mt-10">
          © 2024 浪我包養. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
