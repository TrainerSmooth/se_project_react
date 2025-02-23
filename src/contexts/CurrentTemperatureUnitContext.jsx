import React, { createContext } from "react";
const CurrentTemperatureUnitContext = createContext({
  CurrentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});
export { CurrentTemperatureUnitContext };
export default CurrentTemperatureUnitContext;
