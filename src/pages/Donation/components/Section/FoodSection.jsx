import ASSETS from "@/assets";
import { DoodleUnderline } from "@/components/decorative/DoodleUnderline";

export default function FoodSection() {
  return (
    <div className="relative flex flex-col gap-x-6 pb-12 pt-6 xl:flex-row-reverse xl:py-[124px] 3xl:gap-0">
      <section className="relative flex w-full justify-center">
        <img
          className="-bottom-[67px] right-[60px] -z-10 mb-8 3xl:absolute 3xl:translate-x-1/4 3xl:scale-110"
          src={ASSETS.IMAGES.DONATION.WARM}
          alt="給予毛孩一份溫暖"
        />
      </section>
      <section className="flex flex-col items-center xl:items-start">
        <div className="relative mb-10 flex flex-col items-center">
          <h4 className="text-h4 text-primary-1 xl:text-h1">
            給予毛孩一份溫暖
          </h4>

          <div className="absolute right-0 top-[38px] xl:top-[76px]">
            <DoodleUnderline className="w-[158px] text-secondary-3 xl:w-[274px]" />
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
  );
}
