import { useEffect } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Intro from "./components/Intro/Intro";
import NextHours from "./components/NextHours/NextHours";
import TodayInfo from "./components/TodayInfo";
import Forecasts from "./components/Forecasts/Forecasts";

import { usePositionCoordsCtx } from "./store/PositionCoordsCtxProvider";

import "./App.css";

function App() {
  const PositionCoordsCtx = usePositionCoordsCtx();

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
      }
    );
  }, [PositionCoordsCtx.setPositionCoords]);

  return (
    <>
      <Header />
      <Main>
        <Intro />
        <NextHours />
        <TodayInfo />
        <Forecasts />
      </Main>
    </>
  );
}

export default App;
