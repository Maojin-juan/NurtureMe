import PropTypes from "prop-types";
import clsx from "clsx";

export default function DonationDropdown({
  isOpen,
  items,
  activeSection,
  onSelect,
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl bg-white p-4 shadow-lg">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={clsx(
                "w-full rounded-lg px-4 py-2 text-left transition-colors",
                activeSection === item.id
                  ? "bg-secondary-1 text-white"
                  : "text-primary-1 hover:bg-secondary-1/10",
              )}
              onClick={() => onSelect(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

DonationDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeSection: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
