import "./BurgerButton.css";

function BurgerButton({ onClick, open }) {
  return (
    <button className="burger-button" onClick={onClick}>
      {open ? (
        <i className="fa-solid fa-xmark"></i>
      ) : (
        <i className="fa-solid fa-bars"></i>
      )}
    </button>
  );
}

export default BurgerButton;
