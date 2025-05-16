import "./SideToggle.css";

function SideToggle({ onClick, expanded }) {
  return (
    <button className="toggle-button" onClick={onClick}>
      <i className={`fa-solid fa-chevron-${expanded ? "left" : "right"}`}></i>
    </button>
  );
}

export default SideToggle;
