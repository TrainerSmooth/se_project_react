import React, { createContext } from "react";
const CurrentTemperatureUnitContext = createContext({
  CurrentTemperatureUnit: "", // Fix the casing here
  handleToggleSwitchChange: () => {},
});
export default CurrentTemperatureUnitContext;
