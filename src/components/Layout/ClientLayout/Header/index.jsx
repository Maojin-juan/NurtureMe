import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`left-0 top-0 z-50 w-full transition-all duration-300 ${isSticky ? "fixed" : "relative"} xl:fixed`}
    >
      <div className="bg-headerWave bg-primary-1 bg-cover bg-no-repeat xl:bg-transparent">
        <Navbar />
      </div>
    </header>
  );
}
