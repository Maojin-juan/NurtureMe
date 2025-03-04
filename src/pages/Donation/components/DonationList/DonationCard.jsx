import PropTypes from "prop-types";
import clsx from "clsx";

export default function DonationCard({
  title,
  image,
  hasLineBreak = false,
  isActive = false,
  onClick,
}) {
  return (
    <li className="relative w-1/4 px-6">
      <button
        type="button"
        className="group relative block w-full hover:cursor-pointer"
        onClick={onClick}
      >
        <h2
          className={clsx(
            "absolute inset-0 z-20 flex flex-col items-center justify-center text-h2 text-white transition-opacity duration-300",
            {
              "opacity-70 group-hover:opacity-100": !isActive,
            },
          )}
        >
          {hasLineBreak ? (
            <>
              <span>線上</span>
              <span>認養</span>
            </>
          ) : (
            title
          )}
        </h2>
        <div className="relative w-full rounded-[40px] pb-[100%]">
          <div
            className={clsx(
              "absolute inset-0 z-10 rounded-[40px] transition-all duration-300",
              {
                "bg-black/30 group-hover:bg-secondary-3 group-hover:opacity-70":
                  !isActive,
                "bg-secondary-3 opacity-70": isActive,
              },
            )}
          />
          <img
            src={image}
            alt={title}
            className={clsx(
              "absolute inset-0 h-full w-full rounded-[40px] object-cover transition-all duration-300",
              {
                "ring-8 ring-secondary-2": isActive,
                "group-hover:ring-8 group-hover:ring-secondary-2": !isActive,
              },
            )}
          />
        </div>
      </button>
    </li>
  );
}

DonationCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  hasLineBreak: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
