import marqueeData from "../../data/marqueeItems.json";

export default function NewsFeed() {
  return (
    <>
      {/* 桌面版新聞欄 */}
      <section className="hidden h-[120px] bg-primary-4 px-[120px] py-[20px] xl:block">
        <ul className="flex px-[60px]">
          {marqueeData.marqueeItems.map((item) => (
            <li key={item.id} className="border-r border-primary-3">
              <a href="#" className="flex items-center">
                <div className="h-[80px] w-[80px] overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
                <p className="pe-[14px] ps-[12px] text-h6 text-primary-2">
                  {item.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* 手機版走馬燈 */}
      <section className="block overflow-x-hidden bg-primary-4 xl:hidden">
        <ul className="flex animate-marquee whitespace-nowrap py-[8px]">
          {marqueeData.marqueeItems.map((item) => (
            <li key={item.id} className="border-r border-primary-3">
              <a href="#" className="flex items-center">
                <div className="h-[32px] w-[32px] overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
                <p className="pe-[12px] ps-[12px] text-h8 text-primary-2">
                  {item.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
