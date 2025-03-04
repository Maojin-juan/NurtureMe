import { DoodleUnderline } from "@/components/decorative/DoodleUnderline";
import { Link } from "react-router-dom";

export default function DonateSection() {
  return (
    <div className="pb-12 pt-6 xl:pb-[105px] xl:pt-[120px]">
      <div className="xl:flex">
        <div className="xl:w-1/2">
          <div className="relative mb-10 flex justify-center xl:justify-start">
            <h4 className="text-h4 text-primary-1 xl:text-h1">捐款流程</h4>

            <div className="absolute top-10 xl:-left-[5px] xl:top-[77px]">
              <DoodleUnderline className="w-[158px] text-secondary-3 xl:w-[274px]" />
            </div>
          </div>
          <div className="mb-6 flex flex-col gap-3 text-fs-6 text-primary-2 xl:mb-10 xl:gap-6 xl:text-fs-4">
            <p>簡單幾步，就能為園區的貓狗帶來溫暖與希望。</p>
            <p>無論金額大小，您的捐款都將成為牠們的食物、醫療與照護。</p>
            <p>一起加入我們，用愛心點亮牠們的未來。</p>
            <p>您的每一分付出，都能改變牠們的一生。</p>
          </div>
          <Link
            to="/"
            className="hidden rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white transition-all duration-150 hover:scale-110 hover:opacity-80 focus:scale-100 xl:inline-block"
          >
            立即捐款
          </Link>
        </div>
        <div className="xl:w-1/2">
          <div className="donation-steps mb-6 flex flex-col gap-[34px] text-fs-3 text-secondary-1 xl:mb-0 xl:h-full xl:justify-between xl:text-fs-1">
            <div className="relative flex items-center xl:gap-4">
              <div className="bg-donateStepPaw flex size-16 items-center justify-center bg-center bg-no-repeat p-4 xl:size-20">
                1
              </div>
              <p className="text-h7 xl:text-h3">捐款資料及金額</p>
              <span className="absolute left-8 top-full h-[34px] w-px bg-secondary-3 xl:left-10 xl:top-[95px] xl:h-20"></span>
            </div>
            <div className="relative flex items-center xl:gap-4">
              <div className="bg-donateStepPaw flex size-16 items-center justify-center bg-center bg-no-repeat p-4 xl:size-20">
                2
              </div>
              <p className="text-h7 xl:text-h3">確認捐款資料</p>
              <span className="absolute left-8 top-full h-[34px] w-px bg-secondary-3 xl:left-10 xl:top-[95px] xl:h-20"></span>
            </div>
            <div className="relative flex items-center xl:gap-4">
              <div className="bg-donateStepPaw flex size-16 items-center justify-center bg-center bg-no-repeat p-4 xl:size-20">
                3
              </div>
              <p className="text-h7 xl:text-h3">完成捐贈</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link
          to="/"
          className="inline-block rounded-2xl bg-secondary-1 px-6 py-4 text-h7 text-white transition-all duration-150 hover:scale-110 hover:opacity-80 focus:scale-100 xl:hidden"
        >
          立即捐款
        </Link>
      </div>
    </div>
  );
}
