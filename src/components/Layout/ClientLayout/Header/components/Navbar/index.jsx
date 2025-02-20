import { useState, useCallback, useRef, useEffect } from "react";

// 視覺組件
import CartIcon from "../CartIcon";
import HamburgerButton from "../HamburgerButton";
import Logo from "../Logo";
import NavList from "../NavList";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // 處理視窗大小變化
  useEffect(() => {
    const handleResize = () => {
      if (!menuRef.current) return;

      if (window.innerWidth >= 1200) {
        setIsMenuOpen(false);
        menuRef.current.style.height = "0";
      } else if (isMenuOpen) {
        menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
      } else {
        menuRef.current.style.height = "0";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    if (!menuRef.current) return;

    setIsMenuOpen((prev) => {
      const newIsOpen = !prev;

      if (newIsOpen) {
        menuRef.current.style.height = `${menuRef.current.scrollHeight}px`;
      } else {
        menuRef.current.style.height = "0";
      }

      return newIsOpen;
    });
  }, []);

  return (
    <>
      <nav className="flex justify-between bg-primary-1 bg-cover bg-no-repeat px-3 py-2 lg:container xl:bg-transparent">
        <Logo />
        <div className="flex items-center gap-x-2 xl:gap-x-4">
          <NavList className="hidden items-center gap-x-4 text-right text-h8 text-primary-4 xl:flex xl:text-h7" />
          <CartIcon />
          <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
        </div>
      </nav>

      <div
        ref={menuRef}
        className="transition-burger overflow-hidden bg-primary-1 xl:hidden"
      >
        <NavList
          className="container flex flex-col items-end font-bold text-primary-4"
          onClick={toggleMenu}
        />
      </div>
    </>
  );
};

export default Navbar;
