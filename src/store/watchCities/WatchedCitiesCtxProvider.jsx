import { useContext, useState } from "react";
import WatchCitiesCtx from "./watched-cities";

function WatchCitiesCtxProvider(props) {
  const [watchedCities, setWatchedCities] = useState([
    { lat: 48.856614, lon: 2.3522219 },
    { lat: 28.958284, lon: 50.825424 },
    { lat: 51.51, lon: 0.06 },
  ]);

  return (
    <WatchCitiesCtx.Provider value={{ watchedCities, setWatchedCities }}>
      {props.children}
    </WatchCitiesCtx.Provider>
  );
}

export default WatchCitiesCtxProvider;

export function useWatchCitiesCtx() {
  return useContext(WatchCitiesCtx);
}
