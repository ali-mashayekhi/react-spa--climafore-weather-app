import { usePositionCoordsCtx } from "../store/PositionCoordsCtxProvider";
import useIp from "./use-ip";
import { useState, useEffect } from "react";

function useSetCoords() {
  const PositionCoordsCtx = usePositionCoordsCtx();
  const [geolocationError, setGeolocationError] = useState(false);
  const coords = useIp(geolocationError);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        PositionCoordsCtx.setPositionCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.log("Error:", error.message);
        setGeolocationError(true);
      },
      { timeout: 3000 }
    );
  }, []);

  useEffect(() => {
    PositionCoordsCtx.setPositionCoords(coords.data);
  }, [coords.data]);
}

export default useSetCoords;
