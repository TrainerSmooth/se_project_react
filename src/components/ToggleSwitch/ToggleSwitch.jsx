import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import "./ToggleSwitch.css";
import { useContext } from "react";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, CurrentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <label className="toggle__switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle__switch-slider"
        checked={CurrentTemperatureUnit === "C"} // Add this line
      />
      <span className="toggle__switch-slide"></span>
      <span className={`toggle__switch-text toggle__switch-text_f`}>F</span>
      <span className="toggle__switch-text toggle__switch-text_c">C</span>
    </label>
  );
}
