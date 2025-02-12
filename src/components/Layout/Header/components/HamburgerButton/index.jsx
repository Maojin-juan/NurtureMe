import PropTypes from "prop-types";

export default function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      type="button"
      className="z-10 flex size-11 cursor-pointer items-center justify-center p-2 xl:hidden"
      onClick={onClick}
      aria-label={`${isOpen ? "關閉" : "開啟"}選單`}
      aria-expanded={isOpen}
    >
      <div
        className={`hamburgerIcon transition-burger relative h-0.5 w-[24px] rounded bg-white ${
          isOpen ? "hamburgerOpen" : ""
        }`}
      />
    </button>
  );
}

HamburgerButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
