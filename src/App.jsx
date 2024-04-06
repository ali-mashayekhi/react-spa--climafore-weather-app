import { useEffect } from "react";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main";
import Intro from "./components/Intro/Intro";
import NextHours from "./components/NextHours/NextHours";
import TodayInfo from "./components/TodayInfo";
import Forecasts from "./components/Forecasts/Forecasts";
import loadingSpinner from "./assets/Rolling@1.25x-1.0s-200px-200px.svg";

import { usePositionCoordsCtx } from "./store/PositionCoordsCtxProvider";

import "./App.css";
import useWeather from "./hooks/use-weather";

function App() {
  const PositionCoordsCtx = usePositionCoordsCtx();
  const weather = useWeather(PositionCoordsCtx.positionCoords);

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

  if (weather.isPending)
    return (
      <>
        <Header />
        <Main>
          <img className="mt-14 justify-self-center" src={loadingSpinner}></img>
        </Main>
      </>
    );

  if (weather.isError)
    return (
      <>
        <Header />
        <Main>
          <p className="mt-14 justify-self-center">{weather.error}</p>
        </Main>
      </>
    );

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
