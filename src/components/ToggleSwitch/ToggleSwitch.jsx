import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import "./ToggleSwitch.css";
import { useContext, useState, useEffect } from "react";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );

  const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
  useEffect(
    () => setIsChecked(currentTemperatureUnit === "C"),
    [currentTemperatureUnit]
  );

  return (
    <div className="toggle-switch">
      <label className="toggle-switch__label">
        <input
          onChange={handleToggleSwitchChange}
          type="checkbox"
          className="toggle-switch__input"
          value={currentTemperatureUnit}
          checked={isChecked} // Add this line
        />
        <span className="toggle-switch__circle"></span>
        <span className={`toggle-switch__text toggle-switch__text_f`}>F</span>
        <span className="toggle-switch__text toggle-switch__text_c">C</span>
      </label>
    </div>
  );
}
