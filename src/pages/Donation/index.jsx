import { Helmet } from "react-helmet-async";

export default function Donation() {
  return (
    <>
      <Helmet>
        <title>立即幫助</title>
        <meta name="description" content="給予毛孩一份溫暖" />
      </Helmet>

      <section className="relative -mt-[60px] bg-donation_banner bg-cover bg-center before:absolute before:inset-0 before:bg-primary-1 before:opacity-30 xl:mt-0">
        <div className="container relative z-10 pb-[48px] pt-[134px] xl:pb-[160px] xl:pt-[240px]">
          <h5 className="mb-4 text-h5 text-white xl:mb-2 xl:text-heading">
            感謝您的善舉，
          </h5>
          <h5 className="text-h5 text-white xl:text-heading">
            每一份捐贈都在為生命譜寫奇蹟
          </h5>
        </div>
        <img
          src="/assets/images/donation/donation_wave13-white.svg"
          className="absolute bottom-0 z-10 h-auto w-full xl:hidden"
          alt="波浪裝飾"
        />
        <img
          src="/assets/images/donation/donation_wave3-white.svg"
          className="absolute bottom-0 z-10 hidden h-auto w-full xl:block"
          alt="波浪裝飾"
        />
      </section>

      <section>
        <div className="container relative">
          <img
            src="../assets/images/donation/donation_footPrint.png"
            alt=""
            className="absolute left-[-265px] top-[40px] hidden xl:block"
          />
          <div className="xl:hidden">
            <div className="py-3">
              {/* Button */}
              <button
                type="button"
                className="inline-flex w-full justify-between rounded-[16px] bg-white px-6 py-4 text-sm font-semibold text-gray-900 shadow-lg ring-2 ring-inset ring-primary-3 transition-all duration-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <p className="text-h7 text-primary-3">捐物資</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="11.5"
                    stroke="#7782B8"
                  />
                  <path
                    d="M7.42693 12.4624L11.1565 16.192C11.7181 16.7536 12.6253 16.7536 13.1869 16.192L16.9165 12.4624C17.8237 11.5552 17.1757 10 15.8941 10H8.43493C7.15333 10 6.51973 11.5552 7.42693 12.4624Z"
                    fill="#7782B8"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative hidden xl:block">
            <div className="py-5">
              <ul className="donation_list flex flex-wrap" id="donation_list">
                <li className="relative w-1/4 px-6" data-target="food_block">
                  <a className="relative block hover:cursor-pointer">
                    <h2 className="absolute inset-0 z-20 flex items-center justify-center text-h2 text-white">
                      捐物資
                    </h2>
                    <div className="relative w-full rounded-[40px] pb-[100%]">
                      <div className="effect"></div>
                      <img
                        src="../assets/images/donation/donation_food.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-[40px] object-cover"
                      />
                    </div>
                  </a>
                </li>
                <li className="relative w-1/4 px-6" data-target="donate_block">
                  <a className="relative block hover:cursor-pointer">
                    <h2 className="absolute inset-0 z-20 flex items-center justify-center text-h2 text-white opacity-70">
                      捐款
                    </h2>
                    <div className="relative w-full rounded-[40px] pb-[100%]">
                      <div className="effect"></div>
                      <img
                        src="../assets/images/donation/donation_donate.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-[40px] object-cover"
                      />
                    </div>
                  </a>
                </li>
                <li className="relative w-1/4 px-6" data-target="store_block">
                  <a className="relative block hover:cursor-pointer">
                    <h2 className="absolute inset-0 z-20 flex items-center justify-center text-h2 text-white opacity-70">
                      義賣
                    </h2>
                    <div className="relative w-full rounded-[40px] pb-[100%]">
                      <div className="effect"></div>
                      <img
                        src="../assets/images/donation/donation_store.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-[40px] object-cover"
                      />
                    </div>
                  </a>
                </li>
                <li className="relative w-1/4 px-6" data-target="adopt_block">
                  <a className="relative block hover:cursor-pointer">
                    <h2 className="absolute inset-0 z-20 flex items-center justify-center text-h2 text-white opacity-70">
                      線上
                      <br />
                      認養
                    </h2>
                    <div className="relative w-full rounded-[40px] pb-[100%]">
                      <div className="effect"></div>
                      <img
                        src="../assets/images/donation/donation_adopt.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full rounded-[40px] object-cover"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div
            className="absolute right-6 z-[45] mt-1 w-56 origin-top-right scale-95 transform rounded-md bg-white opacity-0 shadow-xl ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
            id="dropdown-menu"
          >
            <div className="py-1" role="none">
              {/* Menu items with hover effect */}
              <button
                type="button"
                className="block w-full px-4 py-2 text-sm text-primary-3 transition-colors duration-200 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
                data-target="food_block"
              >
                捐物資
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 text-sm text-primary-3 transition-colors duration-200 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
                data-target="donate_block"
              >
                捐款
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 text-sm text-primary-3 transition-colors duration-200 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
                data-target="store_block"
              >
                義賣
              </button>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-sm text-primary-3 transition-colors duration-200 hover:bg-gray-100"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
                data-target="adopt_block"
              >
                線上認養
              </button>
            </div>
          </div>
        </div>
      </section>
      <main className="container relative z-40">
        {/* 捐物資區塊內容 */}

        <div
          id="food_block"
          className="content-section relative flex flex-col pb-[48px] pt-6 xl:flex-row-reverse xl:py-[120px]"
        >
          <img
            src="../assets/images/donation/donation_wave3-white.svg"
            alt=""
            className="absolute top-8 hidden h-auto w-full xl:block"
          />
          <section className="relative flex w-full justify-center">
            <img
              src="../assets/images/donation/donation_warm_sm.svg"
              alt=""
              className="mb-8 block xl:hidden"
            />
            <img
              src="../assets/images/donation/donation_warm.svg"
              alt=""
              className="absolute -bottom-6 right-[60px] -z-10 hidden translate-x-1/4 scale-110 xl:block"
            />
          </section>
          <section className="flex flex-col items-center xl:items-start">
            <div className="relative mb-10 flex flex-col items-center">
              <h4 className="text-h4 text-primary-1 xl:text-h1">
                給予毛孩一份溫暖
              </h4>
              <div className="relative left-[58px] w-[158px] xl:left-[130px] xl:w-[274px]">
                <img
                  src="../assets/images/donation/donation_underline.svg"
                  alt="下底線圖片"
                  className="block w-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="flex flex-col justify-center gap-3 text-fs-6 text-primary-2 xl:gap-6 xl:text-fs-4">
                <p>我們園區裡，流浪至此的毛孩正等待著您的幫助。</p>
                <p>
                  每一份捐贈的物資，無論是食物、保健品還是清潔用品，都能帶給這些小生命更多的希望和安全感。
                </p>
                <p>
                  您的支持，將是他們幸福生活的開始。請和我們一起，用愛心點亮牠們的未來。
                </p>
              </div>
              <div className="relative flex flex-col gap-3 pl-5 text-h8 text-secondary-1 xl:text-h6">
                <div className="absolute bottom-0 left-0 top-0 w-2 rounded-full bg-highlight"></div>
                <p>郵寄地址：快樂市寵物區幸福路 555 號</p>
                <p>電話：04-12340000</p>
                <p>聯絡人：來福</p>
              </div>
            </div>
          </section>
        </div>

        {/* 捐款區塊內容 */}

        <div
          id="donate_block"
          className="content-section hidden pb-[105px] xl:pt-[120px]"
        >
          <div className="xl:flex">
            <div className="xl:w-1/2">
              <div className="mb-[23px] flex flex-col items-center xl:mb-[14px] xl:items-start">
                <h4 className="text-h4 text-primary-1 xl:text-h1">捐款流程</h4>
                <img
                  src="../assets/images/donation/donation_underline.svg"
                  alt="下底線圖片"
                  className="block h-auto w-[158px] xl:w-[274px]"
                />
              </div>
              <div className="mb-6 flex flex-col gap-3 text-fs-6 text-primary-2 xl:mb-10 xl:gap-6 xl:text-fs-4">
                <p>簡單幾步，就能為園區的貓狗帶來溫暖與希望。</p>
                <p>無論金額大小，您的捐款都將成為牠們的食物、醫療與照護。</p>
                <p>一起加入我們，用愛心點亮牠們的未來。</p>
                <p>您的每一分付出，都能改變牠們的一生。</p>
              </div>
              <a
                href="#"
                className="hidden rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white xl:inline-block"
              >
                立即捐款
              </a>
            </div>
            <div className="xl:w-1/2">
              <div className="donation-steps mb-6 flex flex-col gap-[34px] text-fs-3 text-secondary-1 xl:mb-0 xl:h-full xl:justify-between xl:text-fs-1">
                <div className="step-item relative flex items-center xl:gap-4">
                  <div className="step-number flex h-[64px] w-[64px] items-center justify-center bg-donation_paw_sm bg-center bg-no-repeat p-4 xl:h-[80px] xl:w-[80px] xl:bg-donation_paw">
                    1
                  </div>
                  <p className="text-h7 xl:text-h3">捐款資料及金額</p>
                  <span className="absolute left-[32px] top-full h-[34px] w-[1px] bg-secondary-3 xl:left-10 xl:top-[95px] xl:h-[80px]"></span>
                </div>
                <div className="step-item relative flex items-center xl:gap-4">
                  <div className="step-number flex h-[64px] w-[64px] items-center justify-center bg-donation_paw_sm bg-center bg-no-repeat p-4 xl:h-[80px] xl:w-[80px] xl:bg-donation_paw">
                    2
                  </div>
                  <p className="text-h7 xl:text-h3">確認捐款資料</p>
                  <span className="absolute left-[32px] top-full h-[34px] w-[1px] bg-secondary-3 xl:left-10 xl:top-[95px] xl:h-[80px]"></span>
                </div>
                <div className="step-item relative flex items-center xl:gap-4">
                  <div className="step-number flex h-[64px] w-[64px] items-center justify-center bg-donation_paw_sm bg-center bg-no-repeat p-4 xl:h-[80px] xl:w-[80px] xl:bg-donation_paw">
                    3
                  </div>
                  <p className="text-h7 xl:text-h3">完成捐贈</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="inline-block rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white xl:hidden"
            >
              立即捐款
            </a>
          </div>
        </div>

        {/* 義賣區塊內容 */}

        <div id="store_block" className="content-section hidden">
          義賣的內容
        </div>

        {/* 線上認養區塊內容 */}

        <div id="adopt_block" className="content-section hidden">
          線上認養的內容
        </div>
      </main>
      <img
        src="../assets/images/donation/donation_wave4-primary.svg"
        alt=""
        className="z-40 block h-auto w-full"
      />
    </>
  );
}
