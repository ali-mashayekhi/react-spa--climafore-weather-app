import { createContext } from "react";

const TempUnitCtx = createContext({
  tempUnit: "cel",
  setTempUnit: function () {},
});

export default TempUnitCtx;
