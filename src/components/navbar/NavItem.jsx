import "./NavItem.css";

function NavItem(props) {
  return (
    <a className="nav-item" href={props.url}>
      <li>{props.name}</li>
    </a>
  );
}

export default NavItem;
