import NavItem from "./NavItem";
import BurgerButton from "./BurgerButton";
import "./NavBar.css";
import { useState } from "react";

function NavBar({ isMobile }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (!isMobile && showMobileMenu) setShowMobileMenu(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Using short circuiting && to set classes depending on isMobile and showMobileMenu
  return (
    <nav className="nav-bar">
      <h1>F25D React Task 1</h1>
      <ul
        className={`nav-menu ${isMobile && "nav-menu--mobile"} ${
          isMobile && !showMobileMenu && "hidden"
        }`}
      >
        <NavItem name="Home" url="#" />
        <NavItem name="About" url="#about" />
        <NavItem name="Contact Us" url="#contact" />
      </ul>
      {isMobile && <BurgerButton onClick={toggleMenu} />}
    </nav>
  );
}

export default NavBar;
