import NavItem from "./NavItem";
import BurgerButton from "./BurgerButton";
import "./NavBar.css";
import { useState } from "react";

function NavBar({ mobileMode }) {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navMenuClass = mobileMode
    ? showMenu
      ? "nav-menu nav-menu--mobile"
      : "nav-menu nav-menu--mobile hidden"
    : "nav-menu";

  return (
    <nav className="nav-bar">
      <h1>F25D React Task 1</h1>
      <ul className={navMenuClass}>
        <NavItem name="Home" url="#" />
        <NavItem name="About" url="#about" />
        <NavItem name="Contact Us" url="#contact" />
      </ul>
      {mobileMode && <BurgerButton onClick={toggleMenu} />}
    </nav>
  );
}

export default NavBar;
