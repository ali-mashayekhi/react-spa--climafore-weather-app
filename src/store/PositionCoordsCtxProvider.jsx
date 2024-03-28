import { useContext, useState } from "react";
import PositionCoordsCtx from "./position-coords";

function PositionCoordsCtxProvider(props) {
  const [positionCoords, setPositionCoords] = useState(null);

  return (
    <PositionCoordsCtx.Provider value={{ positionCoords, setPositionCoords }}>
      {props.children}
    </PositionCoordsCtx.Provider>
  );
}

export default PositionCoordsCtxProvider;

export function usePositionCoordsCtx() {
  const positionCoordsCtx = useContext(PositionCoordsCtx);
  return positionCoordsCtx;
}
