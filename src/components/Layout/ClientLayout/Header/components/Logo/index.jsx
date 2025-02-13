import { Link } from "react-router-dom";
import { IMAGES } from "@/assets/images";

export default function Logo() {
  return (
    <h1>
      <Link className="flex h-full items-center" to="/">
        <img
          className="px-px py-1 xl:h-16 xl:px-0.5 xl:py-2"
          src={IMAGES.ICONS.LOGO}
          alt="HeaderLogo"
        />
      </Link>
    </h1>
  );
}
