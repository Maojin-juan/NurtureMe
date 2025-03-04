import { useState } from "react";

export const useDonation = () => {
  const [activeSection, setActiveSection] = useState("food");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log("切換選單狀態，目前為：", !isMobileMenuOpen);
  };

  return {
    activeSection,
    isMobileMenuOpen,
    handleSectionChange,
    toggleMobileMenu,
  };
};
