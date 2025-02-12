import { Helmet } from "react-helmet-async";

export default function News() {
  return (
    <>
      <Helmet>
        <title>最新消息</title>
        <meta name="description" content="了解毛孩的最新動態" />
      </Helmet>

      {/* banner swiper */}
      <section className="swiper mySwiper relative -mt-[60px] h-[400px] lg:h-[720px]">
        <div className="swiper-wrapper absolute">
          <div className="swiper-slide bg-news_banner relative flex flex-col justify-center bg-cover bg-center pt-[157px] lg:pt-[226px] xl:justify-start">
            <div className="absolute inset-0 bg-primary-1 bg-opacity-30"></div>
            <div className="container z-10 grid grid-cols-12 gap-6">
              <div className="z-10 col-span-12 lg:col-span-8">
                <p className="mb-2 text-h7 text-white lg:mb-4 lg:text-h3">
                  2024年8月6日
                </p>
                <h2 className="mb-4 text-h5 text-white lg:mb-8 lg:text-h1">
                  關於即將舉行的「流浪動物愛心日」活動
                </h2>
                <p className="text-fs-7 text-white lg:text-fs-3">
                  我們將於2024年8月15日在市中心公園舉行「流浪動物愛心日」活動。這次活動旨在提高公眾對流浪動物的關注...
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide bg-news_banner2 relative flex flex-col justify-center bg-cover bg-center pt-[157px] lg:pt-[226px] xl:justify-start">
            <div className="absolute inset-0 bg-primary-1 bg-opacity-30"></div>
            <div className="container z-10 grid grid-cols-12 gap-6">
              <div className="z-10 col-span-12 lg:col-span-8">
                <p className="mb-2 text-h7 text-white lg:mb-4 lg:text-h3">
                  2024年9月10日
                </p>
                <h2 className="mb-4 text-h5 text-white lg:mb-8 lg:text-h1">
                  「愛心動物日」籌款活動
                </h2>
                <p className="text-fs-7 text-white lg:text-fs-3">
                  我們將於2024年9月20日在市立動物收容所舉行「愛心動物日」籌款活動。此次活動旨在籌集資金，幫助流浪動物獲得醫療照顧和安置...
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-slide bg-news_banner3 relative flex flex-col justify-center bg-cover bg-center pt-[157px] lg:pt-[226px] xl:justify-start">
            <div className="absolute inset-0 bg-primary-1 bg-opacity-30"></div>
            <div className="container z-10 grid grid-cols-12 gap-4">
              <div className="z-10 col-span-12 lg:col-span-8">
                <p className="mb-2 text-h7 text-white lg:mb-4 lg:text-h3">
                  2024年10月5日
                </p>
                <h2 className="mb-4 text-h5 text-white lg:mb-8 lg:text-h1">
                  「一起關心流浪動物」志願者招募活動
                </h2>
                <p className="text-fs-7 text-white lg:text-fs-3">
                  我們將於2024年10月15日在社區中心舉行「一起關心流浪動物」志願者招募活動。活動將介紹如何參與流浪動物救助，並提供志願服務的培訓...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 如果需要導航按鈕 推margin的部分再想一下 */}
        <div className="hidden 2xl:block">
          <div className="swiper-button-next absolute !right-[10%] !size-[80px] rounded-full bg-white bg-opacity-50 p-4 after:!content-none">
            {/* 新增自訂的箭頭圖示 */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5303 11.4697C21.8232 11.7626 21.8232 12.2374 21.5303 12.5303L13.0303 21.0303C12.7374 21.3232 12.2626 21.3232 11.9697 21.0303C11.6768 20.7374 11.6768 20.2626 11.9697 19.9697L19.1893 12.75L3 12.75C2.58579 12.75 2.25 12.4142 2.25 12C2.25 11.5858 2.58579 11.25 3 11.25L19.1893 11.25L11.9697 4.03033C11.6768 3.73744 11.6768 3.26256 11.9697 2.96967C12.2626 2.67678 12.7374 2.67678 13.0303 2.96967L21.5303 11.4697Z"
                fill="#7782B8"
              />
            </svg>
          </div>

          <div className="swiper-button-prev absolute !left-[10%] !size-[80px] rounded-full bg-white bg-opacity-50 p-4 after:!content-none">
            {/* 新增自訂的箭頭圖示 */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.46967 12.5303C2.17678 12.2374 2.17678 11.7626 2.46967 11.4697L10.9697 2.96967C11.2626 2.67678 11.7374 2.67678 12.0303 2.96967C12.3232 3.26256 12.3232 3.73744 12.0303 4.03033L4.81066 11.25L21 11.25C21.4142 11.25 21.75 11.5858 21.75 12C21.75 12.4142 21.4142 12.75 21 12.75L4.81066 12.75L12.0303 19.9697C12.3232 20.2626 12.3232 20.7374 12.0303 21.0303C11.7374 21.3232 11.2626 21.3232 10.9697 21.0303L2.46967 12.5303Z"
                fill="#7782B8"
              />
            </svg>
          </div>
        </div>
        {/* 如果需要分頁器 */}
        <div className="swiper-pagination mb-[8px] lg:mb-16"></div>

        {/* <%- include('./components/news_wave2'); -%> */}
      </section>

      {/* 資訊欄 跑馬燈 */}
      <section className="hidden h-[120px] bg-primary-4 px-[120px] py-[20px] xl:block">
        <ul className="flex px-[60px]">
          <li className="border-r border-primary-3">
            <a href="#" className="flex items-center">
              <div className="h-[80px] w-[80px] overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/assets/images/news/news_feed.jpg"
                  alt="支持園區飼料"
                />
              </div>
              <p className="pe-[14px] ps-[12px] text-h6 text-primary-2">
                支持園區飼料
              </p>
            </a>
          </li>
          <li className="ms-[16px] border-r border-primary-3">
            <a href="#" className="flex items-center">
              <div className="h-[80px] w-[80px] overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/assets/images/news/news_crowdfunding.jpg"
                  alt="新建流浪動物收容所募資進展"
                />
              </div>
              <p className="pe-[14px] ps-[12px] text-h6 text-primary-2">
                新建流浪動物收容所募資進展
              </p>
            </a>
          </li>
          <li className="ms-[16px] border-r border-primary-3">
            <li className="border-r border-primary-3">
              <a href="#" className="flex items-center">
                <div className="h-[80px] w-[80px] overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/assets/images/news/news_presents.jpg"
                    alt="浪我包養年末捐款送好禮！"
                  />
                </div>
                <p className="pe-[14px] ps-[12px] text-h6 text-primary-2">
                  浪我包養年末捐款送好禮！
                </p>
              </a>
            </li>
          </li>
          <li className="ms-[16px]">
            <a href="#" className="flex items-center">
              <div className="h-[80px] w-[80px] overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/assets/images/news/news_gotoschool.jpg"
                  alt="【浪犬「趣」上學】融入新家"
                />
              </div>
              <p className="ps-[12px] text-h6 text-primary-2">
                【浪犬「趣」上學】融入新家
              </p>
            </a>
          </li>
        </ul>
      </section>
      {/* 資訊欄 跑馬燈 375px */}
      <section className="block overflow-x-hidden bg-primary-4 xl:hidden">
        <ul className="flex animate-marquee whitespace-nowrap py-[8px]">
          <li className="border-r border-primary-3">
            <a href="#" className="flex items-center">
              <div className="h-[32px] w-[32px] overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/assets/images/news/news_feed.jpg"
                  alt="支持園區飼料"
                />
              </div>
              <p className="pe-[12px] ps-[12px] text-h8 text-primary-2">
                支持園區飼料
              </p>
            </a>
          </li>
          <li className="ms-[12px] border-r border-primary-3">
            <a href="#" className="flex items-center">
              <div className="h-[32px] w-[32px] overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/assets/images/news/news_crowdfunding.jpg"
                  alt="新建流浪動物收容所募資進展"
                />
              </div>
              <p className="pe-[12px] ps-[12px] text-h8 text-primary-2">
                新建流浪動物收容所募資進展
              </p>
            </a>
          </li>
          <li className="ms-[12px] border-r border-primary-3">
            <li className="border-r border-primary-3">
              <a href="#" className="flex items-center">
                <div className="h-[32px] w-[32px] overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src="/assets/images/news/news_presents.jpg"
                    alt="浪我包養年末捐款送好禮！"
                  />
                </div>
                <p className="pe-[12px] ps-[12px] text-h8 text-primary-2">
                  浪我包養年末捐款送好禮！
                </p>
              </a>
            </li>
          </li>
          <li className="ms-[12px]">
            <a href="#" className="flex items-center">
              <div className="h-[32px] w-[32px] overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src="/assets/images/news/news_gotoschool.jpg"
                  alt="【浪犬「趣」上學】融入新家"
                />
              </div>
              <p className="ps-[12px] text-h8 text-primary-2">
                【浪犬「趣」上學】融入新家
              </p>
            </a>
          </li>
        </ul>
      </section>

      {/* 各項消息 */}
      <section className="relative overflow-hidden py-10 lg:py-[120px]">
        {/* <%- include('./components/news_wave1'); -%> */}
        <img
          className="absolute left-[-150px] top-[-120px] hidden opacity-[15%] lg:block"
          src="/assets/svg/bgShape/bgShape1.svg"
          alt="bgShape1"
        />
        <div className="container block grid-cols-12 gap-6 lg:grid">
          <div className="mb-[56px] lg:col-span-9 lg:mb-0">
            <div className="mb-[56px] lg:mb-12">
              <div className="swiper news-swiper">
                {/* Additional required wrapper */}
                <div className="swiper-wrapper lg:mb-[48px]">
                  {/* Slides */}
                  <div className="swiper-slide !flex flex-col-reverse !items-center lg:flex-row">
                    <div className="m-0 flex w-full flex-col justify-between lg:me-[24px] lg:w-[50%]">
                      <h2 className="mb-[12px] mt-[24px] text-h5 text-primary-1 lg:mb-[36px] lg:mt-0 lg:text-h2">
                        流浪貓咪健康檢查活動
                      </h2>
                      <p className="text-fs-6 text-primary-2 lg:text-fs-3">
                        我們正在籌劃一場針對流浪貓咪的免費健康檢查活動。這次活動將於2024年8月20日在我們的動物...
                      </p>
                    </div>
                    <div className="h-[264px] w-full overflow-hidden rounded-[20px] lg:h-[362px] lg:w-[50%]">
                      <img
                        className="h-full w-full object-cover"
                        src="/assets/images/news/news_check-up.jpg"
                        alt="check-up"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide !flex flex-col-reverse !items-center lg:flex-row">
                    <div className="m-0 flex w-full flex-col justify-between lg:me-[24px] lg:w-[50%]">
                      <h2 className="mb-[12px] mt-[24px] text-h5 text-primary-1 lg:mb-[36px] lg:mt-0 lg:text-h2">
                        支持園區飼料活動
                      </h2>
                      <p className="text-fs-6 text-primary-2 lg:text-fs-3">
                        我們正在籌劃一場大型捐贈飼料的活動。這次活動將於2024年9月20日在我們的動物...
                      </p>
                    </div>
                    <div className="h-[264px] w-full overflow-hidden rounded-[20px] lg:h-[362px] lg:w-[50%]">
                      <img
                        className="h-full w-full object-cover"
                        src="/assets/images/news/news_feed.jpg"
                        alt="delights"
                      />
                    </div>
                  </div>
                  <div className="swiper-slide !flex flex-col-reverse !items-center lg:flex-row">
                    <div className="m-0 flex w-full flex-col justify-between lg:me-[24px] lg:w-[50%]">
                      <h2 className="mb-[12px] mt-[24px] text-h5 text-primary-1 lg:mb-[36px] lg:mt-0 lg:text-h2">
                        群眾募資活動
                      </h2>
                      <p className="text-fs-6 text-primary-2 lg:text-fs-3">
                        一場盛大的群眾募資活動將於2024年10月20日在中央公園，與偶像們攜手響應...
                      </p>
                    </div>
                    <div className="h-[264px] w-full overflow-hidden rounded-[20px] lg:h-[362px] lg:w-[50%]">
                      <img
                        className="h-full w-full object-cover"
                        src="/assets/images/news/news_crowdfunding.jpg"
                        alt="check-up"
                      />
                    </div>
                  </div>
                </div>
                {/* pagination */}
                <div className="flex items-center justify-center">
                  <div className="custom-button-prev hidden !size-[32px] cursor-pointer rounded-full border border-primary-3 border-opacity-50 p-[8px] backdrop-blur-sm after:!content-none hover:bg-primary-1 2xl:block">
                    {/* 新增自訂的箭頭圖示 */}
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.875931 8.42417C0.641616 8.18985 0.641616 7.80995 0.875931 7.57564L7.67593 0.775637C7.91024 0.541323 8.29014 0.541323 8.52446 0.775637C8.75877 1.00995 8.75877 1.38985 8.52446 1.62417L2.74872 7.3999L15.7002 7.3999C16.0316 7.3999 16.3002 7.66853 16.3002 7.9999C16.3002 8.33127 16.0316 8.5999 15.7002 8.5999L2.74872 8.5999L8.52446 14.3756C8.75877 14.61 8.75877 14.9899 8.52446 15.2242C8.29015 15.4585 7.91025 15.4585 7.67593 15.2242L0.875931 8.42417Z"
                        fill="#7782B8"
                      />
                    </svg>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="custom-pagination mt-2 !flex !w-[343px] justify-center lg:mt-0"></div>{" "}
                  {/* If we need pagination */}
                  <div className="custom-button-next hidden !size-[32px] cursor-pointer rounded-full border border-primary-3 border-opacity-50 p-[8px] after:!content-none hover:bg-primary-1 2xl:block">
                    {/* 新增自訂的箭頭圖示 */}
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.1246 7.57559C16.3589 7.8099 16.3589 8.1898 16.1246 8.42412L9.32456 15.2241C9.09024 15.4584 8.71034 15.4584 8.47603 15.2241C8.24171 14.9898 8.24171 14.6099 8.47603 14.3756L14.2518 8.59985L1.30029 8.59985C0.968921 8.59985 0.700292 8.33122 0.700292 7.99985C0.700292 7.66848 0.968921 7.39985 1.30029 7.39985L14.2518 7.39985L8.47603 1.62412C8.24171 1.3898 8.24171 1.0099 8.47603 0.775589C8.71034 0.541275 9.09024 0.541275 9.32456 0.775589L16.1246 7.57559Z"
                        fill="#7782B8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* cards */}
            <div className="block grid-cols-9 justify-between gap-6 lg:flex lg:grid">
              <div className="col-span-3 mb-8 lg:mb-0">
                <div className="mb-4 block h-[200px] overflow-hidden rounded-[12px] lg:mb-6">
                  <img
                    src="/assets/images/news/news_community.jpg"
                    alt="社區講座"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="mb-3 h-auto text-h7 text-primary-1 lg:h-[72px] lg:text-h6">
                    流浪動物救助社區講座
                  </h3>
                  <p className="text-fs-6 font-normal leading-normal text-primary-3 lg:text-fs-5">
                    {" "}
                    我們將於2024年7月20日舉辦一場關於流浪動物救助的社區講座。講座將介紹我們的工作...
                  </p>
                </div>
              </div>
              <div className="col-span-3 mb-8 lg:mb-0">
                <div className="mb-4 block h-[200px] overflow-hidden rounded-[12px] lg:mb-6">
                  <img
                    src="/assets/images/news/news_delights.jpg"
                    alt="「流浪動物與愛心美食」公益活動"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="mb-3 h-auto text-h7 text-primary-1 lg:h-[72px] lg:text-h6">
                    「流浪動物與愛心美食」公益活動
                  </h3>
                  <p className="text-fs-6 font-normal leading-normal text-primary-3 lg:text-fs-5">
                    {" "}
                    我們將於2024年7月15日舉辦「流浪動物與愛心美食」公益活動，活動將包括義賣和美食攤位。...
                  </p>
                </div>
              </div>
              <div className="col-span-3">
                <div className="mb-4 block h-[200px] overflow-hidden rounded-[12px] lg:mb-6">
                  <img
                    src="/assets/images/news/news_workshop.jpg"
                    alt="流浪動物的故事分享會"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="mb-3 h-auto text-h7 text-primary-1 lg:h-[72px] lg:text-h6">
                    流浪動物的故事分享會
                  </h3>
                  <p className="text-fs-6 font-normal leading-normal text-primary-3 lg:text-fs-5">
                    {" "}
                    我們將於2024年6月20日舉辦一場流浪動物的故事分享會。活動將分享一些感人的流浪動物...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <ul className="divide-y divide-primary-4">
              <li className="pb-4 lg:pb-6">
                <div className="flex lg:block">
                  <h3 className="me-2 text-h6 text-primary-3 lg:me-0">01</h3>
                  <p className="text-fs-5 text-primary-1">流浪動物救助工作坊</p>
                </div>
                <p className="my-3 text-fs-6 text-primary-3 lg:my-6">
                  我們將於2024年6月15日舉辦一個流浪動物救助工作坊，旨在...
                </p>
                <div className="flex justify-between">
                  <p className="text-fs-7 text-primary-4">2024年5月25日</p>
                  <a href="#" className="text-fs-7 text-primary-1">
                    活動詳情→
                  </a>
                </div>
              </li>
              <li className="pb-4 lg:pb-6">
                <div className="mt-4 flex lg:mt-6 lg:block">
                  <h3 className="me-2 text-h6 text-primary-3 lg:me-0">02</h3>
                  <p className="text-fs-5 text-primary-1">
                    流浪動物的急需物資清單
                  </p>
                </div>
                <p className="my-3 text-fs-6 text-primary-3 lg:my-6">
                  目前我們的流浪動物救助中心急需以下物資：貓狗食品...
                </p>
                <div className="flex justify-between">
                  <p className="text-fs-7 text-primary-4">2024年6月20日</p>
                  <a href="#" className="text-fs-7 text-primary-1">
                    活動詳情→
                  </a>
                </div>
              </li>
              <li>
                <div className="mt-4 flex lg:mt-6 lg:block">
                  <h3 className="me-2 text-h6 text-primary-3 lg:me-0">03</h3>
                  <p className="text-fs-5 text-primary-1">感謝捐款者的支持</p>
                </div>
                <p className="my-3 text-fs-6 text-primary-3 lg:my-6">
                  我們衷心感謝最近的捐款者，您的支持幫助我們完成了多項...
                </p>
                <div className="flex justify-between">
                  <p className="text-fs-7 text-primary-4">2024年6月10日</p>
                  <a href="#" className="text-fs-7 text-primary-1">
                    活動詳情→
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="absolute bottom-[-130px] right-[-220px] z-[-1] hidden opacity-[15%] lg:block"
          src="/assets/svg/bgShape/bgShape2.svg"
          alt="bgShape2"
        />
      </section>
    </>
  );
}
