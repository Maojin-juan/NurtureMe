import { Link } from "react-router-dom";

// 圖片來源
import IMAGES from "@/assets/images";

export default function CartIcon() {
  return (
    <Link to="#" className="flex items-center" aria-label="購物車">
      <img src={IMAGES.ICONS.CART} alt="" />
    </Link>
  );
}
