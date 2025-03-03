import React, { createContext } from "react";
const CurrentTemperatureUnitContext = createContext({
  CurrentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});
export default CurrentTemperatureUnitContext;
