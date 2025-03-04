import { Wave4 } from "@/components/decorative";
import { Helmet } from "react-helmet-async";
import DonationBanner from "./components/DonationBanner";
import {
  FoodSection,
  DonateSection,
  StoreSection,
  AdoptSection,
} from "./components/Section";
import DonationList from "./components/DonationList";
import { useDonation } from "./hooks/useDonation";

export default function Donation() {
  const {
    activeSection,
    isMobileMenuOpen,
    handleSectionChange,
    toggleMobileMenu,
  } = useDonation();

  const sections = {
    food: <FoodSection />,
    donate: <DonateSection />,
    store: <StoreSection />,
    adopt: <AdoptSection />,
  };

  return (
    <>
      <Helmet>
        <title>立即幫助</title>
        <meta name="description" content="給予毛孩一份溫暖" />
      </Helmet>

      <DonationBanner />

      <DonationList
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      <main className="relative z-40">
        <div className="container">{sections[activeSection]}</div>
        <Wave4 className="-bottom-px text-primary-1" />
      </main>
    </>
  );
}
