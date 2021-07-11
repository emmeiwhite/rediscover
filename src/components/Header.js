import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="border-2 p-3 flex justify-between align-center">
      <span className="font-bold"> Modern App </span>
      <Navigation />
    </header>
  );
}

export default Header;
