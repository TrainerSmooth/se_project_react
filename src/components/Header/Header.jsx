import "./Header.css";

import avatar from "../../assets/images/Ellipse 18.svg";
import logo from "../../assets/images/Forecast.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  <img src={logo} alt="Weather" />;

  return (
    <header className="header">
      <img
        className="header__logo"
        src={new URL("../../assets/images/wtwr°.svg", import.meta.url).href}
        alt="WTWR (What to Wear?) logo"
      />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddClick}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
