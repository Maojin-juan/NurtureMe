import { Helmet } from "react-helmet-async";

export default function Adoption_old() {
  return (
    <>
      <Helmet>
        <title>線上認養</title>
        <meta name="description" content="給毛孩一個全新的家" />
      </Helmet>

      {/* header swiper */}
      <div className="swiperAdoption relative mb-10 overflow-hidden xl:mt-10 xl:h-[720px]">
        <div className="swiper-wrapper">
          <div className="swiper-slide xl:!w-[1600px]">
            <img
              className="h-full w-full object-cover"
              src="../assets/images/adoption/goldenretriever.jpg"
              alt="golden-retriever"
            />
          </div>
          <div className="swiper-slide xl:!w-[1600px]">
            <img
              className="h-full w-full object-cover"
              src="../assets/images/adoption/goldenretriever.jpg"
              alt="golden-retriever"
            />
          </div>
          <div className="swiper-slide xl:!w-[1600px]">
            <img
              className="h-full w-full object-cover"
              src="../assets/images/adoption/goldenretriever.jpg"
              alt="golden-retriever"
            />
          </div>
          <div className="swiper-slide xl:!w-[1600px]">
            <img
              className="h-full w-full object-cover"
              src="../assets/images/adoption/goldenretriever.jpg"
              alt="golden-retriever"
            />
          </div>
        </div>
        {/* 分頁 */}
        <div className="swiper-pagination md:mb-12"></div>
        {/* 導航按鈕 */}
        <div className="swiper-button-next">
          <img src="../assets/svg/arrow/arrowNext.svg" alt="arrowNext" />
        </div>
        <div className="swiper-button-prev">
          <img src="../assets/svg/arrow/arrowPrev.svg" alt="arrowPrev" />
        </div>
        <img
          className="absolute bottom-0 z-10 w-full"
          src="../assets/svg/wave/waveWhite2.svg"
          alt="wave"
        />
        <div className="absolute bottom-10 left-6 z-10 text-white xl:bottom-[120px] xl:left-[20%]">
          <h2 className="mb-3 text-h3 md:mb-6 md:text-heading">皮亞傑</h2>
          <h4 className="text-h7 md:text-h3">男生•8歲•黃金獵犬</h4>
        </div>
      </div>

      {/* 認養按鈕 */}
      <section className="container mb-20 hidden md:block">
        <div className="flex items-center justify-between border-b border-primary-4 pb-5">
          <div className="relative text-primary-1">
            <img
              className="absolute left-0 top-0 -z-10 -translate-x-16 -translate-y-6"
              src="../assets/svg/adoption/bg-shadow-yellow.svg"
              alt="bg-shadow-yellow"
            />
            <h2 className="mb-6 text-h1">皮亞傑</h2>
            <h4 className="text-h5">男生8歲黃金獵犬</h4>
          </div>
          <button
            className="rounded-3xl bg-secondary-1 px-10 py-6 text-fs-2 font-bold text-white hover:bg-opacity-50"
            type="button"
          >
            立即認養
          </button>
        </div>
      </section>

      {/* 背景故事 */}
      <section className="container mb-10 md:mb-20">
        <div className="flex flex-col items-center text-primary-2 md:flex-row md:items-start">
          <h3 className="mb-2 text-center text-h5 md:w-3/12 md:text-start md:text-h3">
            背景故事
            <img
              className="w-[140px] md:w-[174px]"
              src="../assets/svg/underline/underline.svg"
              alt="line-decoration"
            />
          </h3>
          <div
            className="content-container max-h-[120px] overflow-hidden md:w-9/12 lg:overflow-visible"
            id="contentContainer"
          >
            <div id="content" className="md:text-fs-3">
              <p className="mb-3 md:mb-6">
                皮亞傑是一隻年約8歲的黃金獵犬，擁有著一身光亮的金色毛發和一雙溫柔的大眼睛。他的身上散發著一種獨特的親和力，讓人一見鍾情。雖然皮亞傑曾經經歷過流浪的生活，但他對人類的愛與信任從未改變。他總是用最溫暖的目光看著你，彷彿在告訴你，他對未來充滿希望。
              </p>
              <p className="mb-3 md:mb-6">
                皮亞傑是一隻非常活潑且友善的狗狗。他喜歡在公園裡跑步，特別是那些充滿自然氣息的地方。他喜歡和人一起玩耍，尤其是捲起的球或是玩具，他總是能夠找到最快的路徑奔向它們。他非常聰明，能夠迅速學會一些基本的指令，也喜歡參加一些簡單的訓練。
              </p>
              <p className="mb-3 md:mb-6">
                在家裡，皮亞傑是一位優雅的伴侶。他會安靜地躺在你身邊，享受你輕撫的手掌。當你需要安慰時，他總是第一時間出現,靠在你身邊，帶給你溫暖與安寧。他不喜歡獨處，對於家庭成員，他的忠誠和依賴是無與倫比的。
              </p>
              <p>
                皮亞傑尋找一個充滿愛的家庭，一個能夠給予他關懷與陪伴的環境。他喜歡和人互動，因此一個能夠經常陪伴他的人會是他理想的主人。皮亞傑對於家庭成員尤其友好，無論是大人還是小孩，他都能夠與他們建立深厚的感情。他的活力和溫暖會讓你的家庭生活更加充實與愉快。
              </p>
            </div>
          </div>
          {/* "查看更多" 按鈕，只在手機版顯示 */}
          <button
            id="toggleButton"
            className="ml-auto mt-2 text-primary-3 md:hidden"
          >
            查看更多
          </button>
        </div>
      </section>

      {/* 性格特徵 手機 */}
      <div className="container mb-10">
        <div className="swiper-mobile relative overflow-x-hidden pb-8 text-primary-2 md:hidden">
          <h3 className="mb-2 text-center text-h5">
            性格特徵
            <img
              className="mx-auto w-[140px]"
              src="../assets/svg/underline/underline.svg"
              alt=""
            />
          </h3>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <h4 className="mb-3 text-h7">活動度</h4>
              <p className="mb-4">
                皮亞傑充滿活力，喜歡跑步和玩耍。他需要每天運動來保持健康，非常適合喜歡戶外活動的家庭。
              </p>
              <img
                className="mx-auto"
                src="../assets/svg/adoption/activity.svg"
                alt="activity"
              />
            </div>
            <div className="swiper-slide">
              <h4 className="mb-3 text-h7">親人度</h4>
              <p className="mb-4 md:mb-0">
                皮亞傑對人非常友善，喜歡和人互動，是一位充滿愛心的好夥伴。能與每位家庭成員建立深厚的感情。
              </p>
              <img
                className="mx-auto"
                src="../assets/svg/adoption/friendly.svg"
                alt="friendly"
              />
            </div>
            <div className="swiper-slide">
              <h4 className="mb-3 text-h7">適應力</h4>
              <p className="mb-4">
                皮亞傑適應能力強，能夠快速適應新的環境和生活方式。他樂於接受改變，並能夠輕鬆融入新的家庭。
              </p>
              <img
                className="mx-auto"
                src="../assets/svg/adoption/adaptability.svg"
                alt="adaptability"
              />
            </div>
          </div>
          {/* 分頁 */}
          <div className="swiper-pagination -bottom-6"></div>
        </div>
      </div>

      {/* 性格特徵 電腦 */}
      <section className="container mb-20 hidden md:block">
        <div className="flex flex-col items-center text-primary-2 md:flex-row md:items-start">
          <h3 className="mb-2 text-center text-h5 md:w-3/12 md:text-start md:text-h3">
            性格特徵
            <img
              className="w-[140px] md:w-[174px]"
              src="../assets/svg/underline/underline.svg"
              alt=""
            />
          </h3>
          <div className="md:w-9/12">
            <div className="mb-16 flex flex-col items-center md:flex-row md:items-start">
              <div className="md:w-2/3">
                <h4 className="mb-3 text-h7 md:mb-5 md:text-h4">活動度</h4>
                <p className="mb-4 md:mb-0 md:text-fs-3">
                  皮亞傑充滿活力，喜歡跑步和玩耍。他需要每天運動來保持健康，非常適合喜歡戶外活動的家庭。
                </p>
              </div>

              <div className="md:w-1/3">
                <img
                  className=""
                  src="../assets/svg/adoption/activity.svg"
                  alt="activity"
                />
              </div>
            </div>

            <div className="mb-16 flex flex-col items-center md:flex-row md:items-start">
              <div className="md:w-2/3">
                <h4 className="mb-3 text-h7 md:mb-5 md:text-h4">親人度</h4>
                <p className="mb-4 md:mb-0 md:text-fs-3">
                  皮亞傑對人非常友善，喜歡和人互動，是一位充滿愛心的好夥伴。能與每位家庭成員建立深厚的感情。
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  className=""
                  src="../assets/svg/adoption/friendly.svg"
                  alt="friendly"
                />
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-start">
              <div className="md:w-2/3">
                <h4 className="mb-3 text-h7 md:mb-5 md:text-h4">適應力</h4>
                <p className="mb-4 md:mb-0 md:text-fs-3">
                  皮亞傑適應能力強，能夠快速適應新的環境和生活方式。他樂於接受改變，並能夠輕鬆融入新的家庭。
                </p>
              </div>
              <div className="md:w-1/3">
                <img
                  className=""
                  src="../assets/svg/adoption/adaptability.svg"
                  alt="adaptability"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 健康狀況 */}
      <section className="relative">
        <div className="container mb-10 md:mb-[120px]">
          <div className="flex flex-col text-primary-2 md:flex-row md:items-start">
            <h3 className="mx-auto mb-2 text-center text-h5 md:w-3/12 md:text-start md:text-h3">
              健康狀況
              <img
                className="w-[140px] md:w-[174px]"
                src="../assets/svg/underline/underline.svg"
                alt="underline"
              />
            </h3>
            <div className="md:w-9/12">
              <div className="text-fs-7 md:text-h5">
                <div className="mb-3 flex md:mb-5">
                  <img
                    className="mr-2"
                    src="../assets/svg/adoption/footprint-icon.svg"
                    alt="footprint-icon"
                  />
                  <h5 className="">
                    皮毛：
                    <span className="font-normal">
                      毛髮光亮，皮膚無紅腫或感染跡象。
                    </span>
                  </h5>
                </div>
                <div className="mb-3 flex items-center md:mb-5">
                  <img
                    className="mr-2"
                    src="../assets/svg/adoption/footprint-icon.svg"
                    alt="footprint-icon"
                  />
                  <h5 className="">
                    眼睛：
                    <span className="font-normal">
                      眼睛清澈，沒有流淚或紅腫的情況。
                    </span>
                  </h5>
                </div>
                <div className="mb-3 flex items-center md:mb-5">
                  <img
                    className="mr-2"
                    src="../assets/svg/adoption/footprint-icon.svg"
                    alt="footprint-icon"
                  />
                  <h5 className="">
                    耳朵：
                    <span className="font-normal">
                      耳朵乾淨無異味或分泌物。
                    </span>
                  </h5>
                </div>
                <div className="mb-5 flex items-center md:mb-8">
                  <img
                    className="mr-2"
                    src="../assets/svg/adoption/footprint-icon.svg"
                    alt="footprint-icon"
                  />
                  <h5 className="">
                    活動能力：
                    <span className="font-normal">
                      步態穩定，關節活動自如無疼痛。
                    </span>
                  </h5>
                </div>
              </div>
              <ul className="flex">
                <li className="mr-2 flex rounded-[40px] bg-primary-3 px-2 py-1 text-fs-7 text-white md:mr-3 md:px-3 md:py-2 md:text-fs-5">
                  <img
                    className="mr-2"
                    src="../assets/svg/adoption/checkbox-icon.svg"
                    alt="checkbox-icon"
                  />
                  疫苗
                </li>
                <li className="mr-2 flex rounded-[40px] bg-primary-3 px-2 py-1 text-fs-7 text-white md:mr-3 md:px-3 md:py-2 md:text-fs-5">
                  <img
                    className="mr-2"
                    src="../assets/svg/adoption/checkbox-icon.svg"
                    alt="checkbox-icon"
                  />
                  驅蟲
                </li>
                <li className="flex rounded-[40px] bg-primary-3 px-2 py-1 text-fs-7 text-white md:px-3 md:py-2 md:text-fs-5">
                  <img
                    className="mr-2"
                    src="../assets/svg/adoption/checkbox-icon.svg"
                    alt="checkbox-icon"
                  />
                  結紮
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
        <img
          className="absolute -bottom-[120px] hidden w-full opacity-50 md:block"
          src="../assets/svg/wave/wavePrimary4.svg"
          alt="wavePrimary4"
        />
      </section>

      {/* 認養 button */}
      <section className="container mb-10 text-center md:hidden">
        <button
          className="rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white hover:bg-opacity-50"
          type="button"
        >
          立即認養
        </button>
      </section>

      {/* 更多寶貝 */}
      <section className="relative bg-primary-4 bg-opacity-50 py-5 text-primary-3 md:overflow-hidden md:pb-20">
        <img
          className="absolute top-0 w-full -translate-y-full opacity-50 md:hidden"
          src="../assets/svg/wave/wavePrimary4.svg"
          alt="wavePrimary4"
        />
        <img
          className="absolute bottom-0 left-0 hidden -translate-x-20 translate-y-28 opacity-70 md:block"
          src="../assets/svg/adoption/bg-shadow1.svg"
          alt="bg-shadow1"
        />
        <img
          className="absolute right-0 top-0 hidden -translate-y-28 translate-x-20 opacity-70 md:block"
          src="../assets/svg/adoption/bg-shadow2.svg"
          alt="bg-shadow2"
        />
        <div className="container">
          <div className="mb-4 flex items-end justify-center gap-x-[30px] md:mb-16">
            <img
              className="block md:hidden"
              src="../assets/svg/adoption/line-decoration-left-mobile.svg"
              alt="line-decoration-left"
            />
            <img
              className="hidden md:block"
              src="../assets/svg/adoption/line-decoration-left.svg"
              alt="line-decoration-left"
            />
            <h2 className="text-h6 md:text-h2">更多寶貝</h2>
            <img
              className="block md:hidden"
              src="../assets/svg/adoption/line-decoration-right-mobile.svg"
              alt="line-decoration-left"
            />
            <img
              className="hidden md:block"
              src="../assets/svg/adoption/line-decoration-right.svg"
              alt="line-decoration-right"
            />
          </div>
          <ul className="flex justify-center gap-x-7">
            <li className="relative">
              <img
                className="size-20 rounded-full border-2 border-primary-3 object-cover md:size-60 md:border-8"
                src="../assets/images/adoption/pet1.jpg"
                alt="pet1"
              />
              <h5 className="absolute left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-primary-2 px-5 py-3 text-h5 text-white md:block">
                嘟嘟
              </h5>

              <p className="hidden text-center md:mt-8 md:block md:text-h7">
                男生•10歲•雪納瑞
              </p>
            </li>
            <li className="relative">
              <img
                className="size-20 rounded-full border-2 border-primary-3 object-cover md:size-60 md:border-8"
                src="../assets/images/adoption/pet2.jpg"
                alt="pet2"
              />
              <h5 className="absolute left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-primary-2 px-5 py-3 text-h5 text-white md:block">
                花生
              </h5>

              <p className="hidden text-center md:mt-8 md:block md:text-h7">
                男生•6歲•混種家貓
              </p>
            </li>
            <li className="relative">
              <img
                className="size-20 rounded-full border-2 border-primary-3 object-cover md:size-60 md:border-8"
                src="../assets/images/adoption/pet3.jpg"
                alt="pet3"
              />
              <h5 className="absolute left-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-primary-2 px-5 py-3 text-h5 text-white md:block">
                妞妞
              </h5>

              <p className="hidden text-center md:mt-8 md:block md:text-h7">
                女生•3歲•吉娃娃
              </p>
            </li>
          </ul>
        </div>

        {/* <%- include('./components/footerWave'); -%> */}
      </section>
    </>
  );
}
