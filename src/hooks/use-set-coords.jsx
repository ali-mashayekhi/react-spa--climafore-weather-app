import { usePositionCoordsCtx } from "../store/PositionCoordsCtxProvider";
import useIp from "./use-ip";
import { useEffect, useState } from "react";

function useSetCoords() {
  const PositionCoordsCtx = usePositionCoordsCtx();
  const [geolocationError, setGeolocationError] = useState(false);
  const coords = useIp(geolocationError);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
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

  if (coords.isError)
    return {
      error: {
        message:
          "There is a problem in getting your ip, You can search the region you want.",
      },
    };

  return {};
}

export default useSetCoords;
