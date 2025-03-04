import PropTypes from "prop-types";
import ASSETS from "@/assets";
import DonationCard from "./DonationCard";
import DonationButton from "./DonationButton";
import DonationDropdown from "./DonationDropdown";
import { PawsCol } from "@/components/decorative";

const donationTypes = [
  {
    id: "food",
    title: "捐物資",
    image: ASSETS.IMAGES.DONATION.FOOD,
  },
  {
    id: "donate",
    title: "捐款",
    image: ASSETS.IMAGES.DONATION.DONATE,
  },
  {
    id: "store",
    title: "義賣",
    image: ASSETS.IMAGES.DONATION.STORE,
  },
  {
    id: "adopt",
    title: "線上認養",
    image: ASSETS.IMAGES.DONATION.ADOPT,
    hasLineBreak: true,
  },
];

export default function DonationList({
  activeSection,
  onSectionChange,
  isMobileMenuOpen = false,
  toggleMobileMenu = () => {},
}) {
  return (
    <section className="relative">
      <PawsCol className="-top-[10px] left-[100px] hidden xl:block" />

      <div className="container">
        {/* 手機版選單 */}
        <div className="xl:hidden">
          <DonationButton
            activeSection={activeSection}
            onClick={toggleMobileMenu}
          />
          <DonationDropdown
            isOpen={isMobileMenuOpen}
            items={donationTypes}
            activeSection={activeSection}
            onSelect={onSectionChange}
          />
        </div>

        {/* 桌面版選單 */}
        <div className="relative hidden xl:block">
          <div className="py-5">
            <ul className="donation_list flex flex-wrap">
              {donationTypes.map((item) => (
                <DonationCard
                  key={item.id}
                  {...item}
                  isActive={activeSection === item.id}
                  onClick={() => onSectionChange(item.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

DonationList.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onSectionChange: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool,
  toggleMobileMenu: PropTypes.func,
};
