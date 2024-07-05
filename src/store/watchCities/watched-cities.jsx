import { createContext } from "react";

const WatchedCitiesCtx = createContext({
  watchedCities: [],
  setWatchedCities: () => {},
});

export default WatchedCitiesCtx;
