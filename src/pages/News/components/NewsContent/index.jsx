import { useSwiper } from "@/hooks/useSwiper";
import { swiperConfigs } from "@/configs/swiperConfig";
import NavigationButtons from "@/pages/Home/components/Team/NavigationButtons";
import featuredData from "../../data/featuredNews.json";
import cardData from "../../data/cardNews.json";
import sideData from "../../data/sideNews.json";

export default function NewsContent() {
  const { swiperRef } = useSwiper(swiperConfigs.news);

  return (
    <div className="container block grid-cols-12 gap-6 lg:grid">
      {/* 左側主要內容 */}
      <div className="mb-[56px] lg:col-span-9 lg:mb-0">
        {/* 輪播新聞 */}
        <div className="mb-[56px] lg:mb-12">
          <div className="swiper news-swiper">
            <div ref={swiperRef} className="swiper-wrapper lg:mb-[48px]">
              {featuredData.featuredNews.map((news) => (
                <div
                  key={news.id}
                  className="swiper-slide !flex flex-col-reverse !items-center lg:flex-row"
                >
                  <div className="m-0 flex w-full flex-col justify-between lg:me-[24px] lg:w-[50%]">
                    <h2 className="mb-[12px] mt-[24px] text-h5 text-primary-1 lg:mb-[36px] lg:mt-0 lg:text-h2">
                      {news.title}
                    </h2>
                    <p className="text-fs-6 text-primary-2 lg:text-fs-3">
                      {news.description}
                    </p>
                  </div>
                  <div className="h-[264px] w-full overflow-hidden rounded-[20px] lg:h-[362px] lg:w-[50%]">
                    <img
                      className="h-full w-full object-cover"
                      src={news.image}
                      alt={news.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <NavigationButtons />
            </div>
          </div>
        </div>

        {/* 新聞卡片 */}
        <div className="block grid-cols-9 justify-between gap-6 lg:flex lg:grid">
          {cardData.cardNews.map((card) => (
            <div key={card.id} className="col-span-3 mb-8 lg:mb-0">
              <div className="mb-4 block h-[200px] overflow-hidden rounded-[12px] lg:mb-6">
                <img src={card.image} alt={card.alt} />
              </div>
              <div className="flex flex-col justify-between">
                <h3 className="mb-3 h-auto text-h7 text-primary-1 lg:h-[72px] lg:text-h6">
                  {card.title}
                </h3>
                <p className="text-fs-6 font-normal leading-normal text-primary-3 lg:text-fs-5">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 右側邊欄 */}
      <div className="lg:col-span-3">
        <ul className="divide-y divide-primary-4">
          {sideData.sideNews.map((news) => (
            <li key={news.id} className="pb-4 lg:pb-6">
              <div className="flex lg:block">
                <h3 className="me-2 text-h6 text-primary-3 lg:me-0">
                  {news.number}
                </h3>
                <p className="text-fs-5 text-primary-1">{news.title}</p>
              </div>
              <p className="my-3 text-fs-6 text-primary-3 lg:my-6">
                {news.description}
              </p>
              <div className="flex justify-between">
                <time className="text-fs-7 text-primary-4">{news.date}</time>
                <a href={news.link} className="text-fs-7 text-primary-1">
                  活動詳情→
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
