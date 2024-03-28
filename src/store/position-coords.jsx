import { createContext } from "react";

const PositionCoordsCtx = createContext({
  positionCoords: { lat: null, lon: null },
  setPositionCoords: () => {},
});

export default PositionCoordsCtx;
