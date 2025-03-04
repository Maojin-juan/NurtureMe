import { Wave3 } from "@/components/decorative";

export default function DonationBanner() {
  return (
    <section className="bg-donationBanner relative -mt-[60px] bg-cover bg-center before:absolute before:inset-0 before:bg-primary-1 before:opacity-30 xl:mt-0">
      <div className="container relative z-10 pb-[48px] pt-[134px] xl:pb-[160px] xl:pt-[240px]">
        <h5 className="mb-4 text-h5 text-white xl:mb-2 xl:text-heading">
          感謝您的善舉，
        </h5>
        <h5 className="text-h5 text-white xl:text-heading">
          每一份捐贈都在為生命譜寫奇蹟
        </h5>
      </div>

      <Wave3 className="-bottom-px text-white" />
    </section>
  );
}
