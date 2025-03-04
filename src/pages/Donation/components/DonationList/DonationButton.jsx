import PropTypes from "prop-types";

export default function DonationButton({ activeSection, onClick }) {
  const getActiveSectionTitle = () => {
    switch (activeSection) {
      case "food":
        return "捐物資";
      case "donate":
        return "捐款";
      case "store":
        return "義賣";
      case "adopt":
        return "線上認養";
      default:
        return "捐物資";
    }
  };

  return (
    <div className="py-3">
      <button
        type="button"
        className="inline-flex w-full justify-between rounded-[16px] bg-white px-6 py-4 text-sm font-semibold text-gray-900 shadow-lg ring-2 ring-inset ring-primary-3 transition-all duration-300 hover:bg-gray-50"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={onClick}
      >
        <p className="text-h7 text-primary-3">{getActiveSectionTitle()}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="11.5"
            stroke="#7782B8"
          />
          <path
            d="M7.42693 12.4624L11.1565 16.192C11.7181 16.7536 12.6253 16.7536 13.1869 16.192L16.9165 12.4624C17.8237 11.5552 17.1757 10 15.8941 10H8.43493C7.15333 10 6.51973 11.5552 7.42693 12.4624Z"
            fill="#7782B8"
          />
        </svg>
      </button>
    </div>
  );
}

DonationButton.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
