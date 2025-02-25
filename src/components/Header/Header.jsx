import "./Header.css";
import avatar from "../../assets/images/Avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Header({ handleAddClick, weatherData, activeModal }) {
  console.log("Header component rendered"); // Check if component re-renders
  console.log("Received handleAddClick:", handleAddClick); // Debugging function prop

  useEffect(() => {
    console.log("activeModal changed:", activeModal); // Track modal state updates
  }, [activeModal]);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        <img
          className="header__logo"
          src={new URL("../../assets/images/wtwr°.svg", import.meta.url).href}
          alt="WTWR (What to Wear?) logo"
        />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData?.city || "Unknown Location"}{" "}
        {/* Handle potential undefined data */}
      </p>
      <ToggleSwitch />
      <button
        onClick={() => {
          console.log("Add clothes button clicked"); // Ensure button press is registered
          if (handleAddClick) {
            handleAddClick();
            console.log("handleAddClick triggered!");
          } else {
            console.error("handleAddClick is not defined");
          }
        }}
        type="button"
        className="header__add-clothes-btn"
      >
        + Add clothes
      </button>
      <NavLink to="/profile">
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;
