import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let menu = (
    <div className={`menuItems ${isMenuOpen ? "navOpen" : ""}`}>
      <span>Menu Items</span>
    </div>
  );

  const handleNavClick = () => {
    console.log("Function is being invoked !!!");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="self-center" onClick={() => handleNavClick()}>
        <FaBars />
      </nav>

      {isMenuOpen && menu}
    </>
  );
};

export default Navigation;
