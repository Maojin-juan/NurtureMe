import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 常數
import { NAV_ITEMS } from "../../constants/nav-items";

export default function NavList({ className, onClick }) {
  return (
    <ul className={className}>
      {NAV_ITEMS.map((item, index) => (
        <li key={`nav-item-${index}`}>
          <Link
            className={item.className}
            to={item.to}
            onClick={onClick}
            role="menuitem"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

NavList.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
