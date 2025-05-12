import NavItem from "./NavItem";
import BurgerButton from "./BurgerButton";
import "./NavBar.css";
import { useState, useEffect } from "react";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 478px)");
    const setMode = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", setMode);
    setMode(mediaQuery);
    return () => mediaQuery.removeEventListener("change", setMode);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navMenuClass = isMobile
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
      {isMobile && <BurgerButton onClick={toggleMenu} />}
    </nav>
  );
}

export default NavBar;
