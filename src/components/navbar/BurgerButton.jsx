import "./BurgerButton.css";

function BurgerButton({ onClick }) {
  return (
    <button className="burger-button" onClick={onClick}>
      <i className="fa-solid fa-bars"></i>
    </button>
  );
}

export default BurgerButton;
