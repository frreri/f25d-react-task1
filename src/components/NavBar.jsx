import NavItem from "./NavItem";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h1>F25D React Task 1</h1>
      <ul>
        <NavItem name="Home" url="#" />
        <NavItem name="About" url="#about" />
        <NavItem name="Contact Us" url="#contact" />
      </ul>
    </nav>
  );
}

export default NavBar;
