import "./SideItem.css";

function SideItem(props) {
  return (
    <a className="side-item" href={props.url}>
      <li>{props.name}</li>
    </a>
  );
}

export default SideItem;
