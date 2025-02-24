import { Helmet } from "react-helmet-async";
import ASSETS from "@/assets";
import { Link } from "react-router-dom";
import {
  BlobShape,
  PawsCol,
  Wave2,
  Wave3,
  Wave4,
} from "@/components/decorative";

export default function About() {
  const financialData = [
    {
      month: "2024/1",
      total: "NTD 98,600",
      expense: "NTD 78,600",
      balance: "NTD 20,000",
      color: "text-red-500",
    },
    {
      month: "2024/2",
      total: "NTD 100,600",
      expense: "NTD 70,000",
      balance: "NTD 30,600",
      color: "text-red-500",
    },
    {
      month: "2024/3",
      total: "NTD 155,000",
      expense: "NTD 130,000",
      balance: "NTD 25,000",
      color: "text-red-500",
    },
    {
      month: "2024/4",
      total: "NTD 120,600",
      expense: "NTD 113,000",
      balance: "NTD 7,000",
      color: "text-red-500",
    },
    {
      month: "2024/5",
      total: "NTD 300,500",
      expense: "NTD 250,000",
      balance: "NTD 50,500",
      color: "text-orange-500",
    },
    {
      month: "2024/6",
      total: "NTD 240,000",
      expense: "NTD 140,000",
      balance: "NTD 100,000",
      color: "text-green-500",
    },
    {
      month: "2024/7",
      total: "NTD 188,600",
      expense: "NTD 98,600",
      balance: "NTD 90,000",
      color: "text-green-500",
    },
    {
      month: "2024/8",
      total: "NTD 366,600",
      expense: "NTD 200,600",
      balance: "NTD 166,600",
      color: "text-green-500",
    },
  ];

  return (
    <>
      <Helmet>
        <title>關於我們</title>
        <meta name="description" content="夢想起飛的旅途" />
      </Helmet>

      <section className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-aboutBanner bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-primary-1 bg-opacity-30" />
        </div>

        <div className="relative -mt-[60px]">
          <div className="container">
            <h3 className="pb-12 pt-[118px] text-h5 font-bold text-white md:pb-40 md:pt-[224px] md:text-heading">
              關於我們
            </h3>
          </div>
        </div>

        <Wave3 className="-bottom-0.5 z-10 text-white" />
      </section>

      <main className="relative py-10 xl:pb-[120px] xl:pt-20">
        <PawsCol className="left-[60px] top-[220px] hidden xl:block" />

        <div className="px-3 xl:container">
          <div className="beforeDecoration textHighlight mb-6 space-y-2 ps-4 before:bg-highlight xl:mb-10 xl:space-y-4 xl:ps-11">
            <h4 className="mb-2 text-h6 font-bold text-primary-1 xl:mb-4 xl:text-h1">
              浪我包養 - 關於我們的故事
            </h4>
            <p className="text-fs-6 text-primary-3 xl:text-h3">
              夢想起飛的旅程
            </p>
          </div>

          <div className="flex flex-col gap-8 text-grey-2 xl:gap-20">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <div className="flex w-full flex-col gap-3 text-fs-6 xl:w-1/2 xl:gap-4 xl:text-fs-3">
                <p>
                  浪我包養的故事始於一群心懷熱愛的動物愛好者，我們在一次偶然的聚會中發現,彼此都有著對流浪貓狗的深深關懷。
                </p>
                <p>
                  我們不僅僅是同情這些無家可歸的毛孩子，更渴望能為牠們做些實質性的改變。
                </p>
                <p>
                  我這個簡單而純粹的夢想，讓他們決定成立一個專門為流浪貓狗提供幫助的組織，並取名為“浪我包養”。
                </p>
              </div>
              <div className="w-full xl:w-1/2">
                <img
                  className="h-40 w-full rounded-xl object-cover xl:h-[480px] xl:rounded-[40px]"
                  src={ASSETS.IMAGES.ABOUT.STORY.STORY_1}
                  alt="關於我們的故事1"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row-reverse sm:gap-6">
              <div className="flex w-full flex-col gap-3 text-fs-6 xl:w-1/2 xl:gap-4 xl:text-fs-3">
                <p>
                  浪初期的日子並不容易，浪我包養的創始團隊租了一個小倉庫作為臨時的收容所，開始收容和照顧街頭的流浪貓狗。
                </p>
                <p>
                  面對有限的資金和人手，他們依然堅持不懈地工作，為每一隻進入收容所的毛孩子提供基本的醫療照護和溫暖的庇護。
                </p>
                <p>
                  我們經常組織募捐活動和志工招募，慢慢地建立起一個小而溫馨的社群。
                </p>
              </div>
              <div className="w-full xl:w-1/2">
                <img
                  className="h-40 w-full rounded-xl object-cover xl:h-[480px] xl:rounded-[40px]"
                  src={ASSETS.IMAGES.ABOUT.STORY.STORY_2}
                  alt="關於我們的故事2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
              <div className="flex w-full gap-3 text-fs-6 xl:w-1/2 xl:gap-4 xl:text-fs-3">
                <p>
                  隨著時間的推移，浪我包養的影響力逐漸擴大，吸引了更多的志工、專業獸醫和動物行為專家的加入。這些專業人士的支持，讓浪我包養能夠提供更高品質的醫療服務和行為矯正。除此之外，線上贊助平台的開設，更是打破了地理的限制，讓世界各地的愛心人士都能參與其中。無論是透過贊助還是現場探訪，大家都能感受到牠們的成長與幸福。
                </p>
              </div>
              <div className="w-full xl:w-1/2">
                <img
                  className="h-40 w-full rounded-xl object-cover xl:h-[480px] xl:rounded-[40px]"
                  src={ASSETS.IMAGES.ABOUT.STORY.STORY_3}
                  alt="關於我們的故事3"
                />
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row-reverse sm:gap-6">
              <div className="flex w-full gap-3 text-fs-6 xl:w-1/2 xl:gap-4 xl:text-fs-3">
                <p>
                  如今，浪我包養已成為一個充滿愛與希望的地方，每年幫助數百隻流浪貓狗找到幸福的家園。我們的夢想不僅實現了，更在不斷擴大影響力，讓更多的人了解並參與到保護動物的行動中來。未來，我們將繼續努力，為每一隻毛孩子創造更好的生活環境，讓愛與關懷永遠流傳。
                </p>
              </div>
              <div className="w-full xl:w-1/2">
                <img
                  className="h-40 w-full rounded-xl object-cover xl:h-[480px] xl:rounded-[40px]"
                  src={ASSETS.IMAGES.ABOUT.STORY.STORY_4}
                  alt="關於我們的故事4"
                />
              </div>
            </div>
          </div>
        </div>

        <PawsCol className="-bottom-[12px] right-[60px] hidden scale-x-[-1] xl:block" />

        <Wave3 className="-bottom-0.5 text-primary-1" />
      </main>

      <section className="relative bg-primary-1">
        <div className="absolute -top-[140px] right-[120px] z-10">
          <div className="h-[244px] w-[380px] bg-contain bg-no-repeat xl:bg-aboutCompanion1" />
        </div>

        <div className="px-3 py-10 xl:container xl:py-20">
          <div className="textHighlight beforeDecoration mb-10 ps-4 before:bg-highlight md:mb-[60px] xl:ps-11">
            <h4 className="mb-2 text-2xl font-bold text-white xl:mb-4 xl:text-h1">
              包養我們
            </h4>
            <p className="text-primary-3 xl:text-h3">線上包養或線上捐贈</p>
          </div>

          <div className="mx-[25.5px] flex flex-col gap-[60px] md:flex-row">
            <div className="relative z-10 md:w-1/2">
              <Link to="/adoption" className="group relative block">
                <div className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-h4 font-bold text-white xl:text-h1">
                  我要包養
                </div>
                <div>
                  <img
                    className="h-full w-full"
                    src={ASSETS.IMAGES.ABOUT.SUPPORT.ADOPT}
                    alt="我要包養"
                  />

                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <img
                      className="absolute inset-0 size-full"
                      src={ASSETS.IMAGES.ABOUT.SUPPORT.HOVER}
                      alt="我要包養 hover"
                    />

                    <div className="bg-doodleUnderline2 absolute bottom-[32.27%] left-1/2 h-[13px] w-[137px] -translate-x-1/2 bg-contain bg-no-repeat xl:bottom-[31.59%] xl:h-[26px] xl:w-[274px]" />
                  </div>
                </div>
              </Link>
              <BlobShape />
            </div>
            <div className="relative z-10 md:w-1/2">
              <Link to="/donation" className="group block">
                <div className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-h4 font-bold text-white xl:text-h1">
                  我要捐贈&捐款
                </div>
                <div>
                  <img
                    className="h-full w-full"
                    src={ASSETS.IMAGES.ABOUT.SUPPORT.DONATION}
                    alt="我要捐贈&捐款"
                  />
                  <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <img
                      className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      src={ASSETS.IMAGES.ABOUT.SUPPORT.HOVER}
                      alt="我要包養 hover"
                    />

                    <div className="bg-doodleUnderline2 absolute bottom-[32.27%] left-1/2 h-[13px] w-[137px] -translate-x-1/2 bg-contain bg-no-repeat xl:bottom-[31.59%] xl:h-[26px] xl:w-[274px]" />
                  </div>
                </div>
              </Link>
              <BlobShape />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 xl:py-[120px]">
        <Wave2 className="top-0 text-primary-1" />

        <div className="absolute bottom-10 left-[112px] -z-10">
          <div className="h-[284px] w-[224px] bg-aboutCompanion2 bg-contain bg-no-repeat opacity-0 transition-opacity duration-300 3xl:opacity-30 [@media(min-width:1835px)]:opacity-100" />
        </div>

        <div className="absolute -bottom-[360px] -left-[240px] -z-10">
          <div className="h-[716px] bg-contain bg-no-repeat xl:w-[700px] xl:bg-aboutShape" />
        </div>

        <div className="px-3 xl:container">
          <div className="textHighlight beforeDecoration mb-6 ps-4 before:bg-highlight xl:ps-11">
            <h4 className="mb-2 text-h6 font-bold text-primary-1 xl:mb-4 xl:text-h1">
              財務報表
            </h4>
            <p className="text-fs-6 text-primary-3 xl:text-h3 xl:font-bold">
              每月誠實、透明的收支明細
            </p>
          </div>
          <div className="mb-6 flex flex-col gap-2 xl:mb-10 xl:flex-col-reverse xl:gap-5 xl:px-[38px]">
            <table className="w-full table-fixed border-separate border-spacing-0 rounded-xl border-2 border-primary-4">
              <thead align="center">
                <tr className="whitespace-nowrap bg-primary-5 text-h8 text-primary-1 xl:text-h6 [&>th:first-child]:rounded-tl-xl [&>th:last-child]:rounded-tr-xl [&>th]:py-3 xl:[&>th]:py-5">
                  <th>月份</th>
                  <th className="hidden md:table-cell">募款總額+前月餘額</th>
                  <th className="hidden md:table-cell">支出</th>
                  <th>餘額</th>
                  <th>明細(pdf.)</th>
                </tr>
              </thead>
              <tbody align="center">
                {financialData.map((item, index) => (
                  <tr
                    key={index}
                    className={`text-fs-7 text-grey-2 xl:text-fs-4 [&>td]:p-0 [&>td]:py-3 xl:[&>td]:py-6 ${
                      index === financialData.length - 1
                        ? ""
                        : "[&>td]:border-b [&>td]:border-primary-5"
                    }`}
                  >
                    <td>{item.month}</td>
                    <td className="hidden md:table-cell">{item.total}</td>
                    <td className="hidden md:table-cell">{item.expense}</td>
                    <td className={`xl:font-bold ${item.color}`}>
                      {item.balance}
                    </td>
                    <td className="flex items-center justify-center">
                      <button className="group size-9 transition-all duration-200 hover:scale-110 active:scale-95">
                        <svg
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-7 text-primary-1 transition-colors duration-200 group-hover:text-secondary-1 xl:size-9"
                        >
                          <path
                            d="M24.885 13.5H22.5V6C22.5 5.175 21.825 4.5 21 4.5H15C14.175 4.5 13.5 5.175 13.5 6V13.5H11.115C9.78 13.5 9.105 15.12 10.05 16.065L16.935 22.95C17.52 23.535 18.465 23.535 19.05 22.95L25.935 16.065C26.88 15.12 26.22 13.5 24.885 13.5ZM7.5 28.5C7.5 29.325 8.175 30 9 30H27C27.825 30 28.5 29.325 28.5 28.5C28.5 27.675 27.825 27 27 27H9C8.175 27 7.5 27.675 7.5 28.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col items-end gap-1 text-fs-7 xl:flex-row xl:gap-10 xl:text-h6 xl:font-bold">
              <div className="fundStatus w-[178px] text-left before:bg-green-500">
                <p className="text-green-500">資金目前充足，感謝大家</p>
              </div>
              <div className="fundStatus w-[178px] text-left before:bg-orange-500">
                <p className="text-orange-500">尚可度日，可多捐贈物資</p>
              </div>
              <div className="fundStatus w-[178px] text-left before:bg-red-500">
                <p className="text-red-500">急需金援</p>
              </div>
            </div>
          </div>
          <Link
            className="mx-auto block w-fit rounded-2xl bg-secondary-1 px-[60px] py-4 text-h7 text-white transition-colors duration-300 hover:bg-secondary-2 xl:px-40 xl:py-6 xl:text-h4"
            to="/donation"
          >
            立即贊助
          </Link>
        </div>

        <Wave4 className="-bottom-0.5 text-primary-1" />
      </section>
    </>
  );
}
