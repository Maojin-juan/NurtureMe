import { Link } from "react-router-dom";

// 圖片來源
import ASSETS from "@/assets";

export default function CartIcon() {
  return (
    <Link to="#" className="flex items-center" aria-label="購物車">
      <img src={ASSETS.ICONS.CART} alt="" />
    </Link>
  );
}
