import { useContext, useState } from "react";
import TempUnitCtx from "./temp-unit";

function TempUnitCtxProvider(props) {
  const [tempUnit, setTempUnit] = useState("cel");

  return (
    <TempUnitCtx.Provider value={{ tempUnit, setTempUnit }}>
      {props.children}
    </TempUnitCtx.Provider>
  );
}

export default TempUnitCtxProvider;

export function useTempUnitCtx() {
  return useContext(TempUnitCtx);
}
