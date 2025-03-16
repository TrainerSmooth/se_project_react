import React, { createContext } from "react";

const CurrentTemperatureUnitContext = createContext({
  currentTemperatureUnit: "C", // Default value (Celsius or Fahrenheit)
  handleToggleSwitchChange: () => {}, // Placeholder function
});

export default CurrentTemperatureUnitContext;
