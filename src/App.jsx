import Header from "./components/Layout/Header/Header";
import MainContainer from "./components/Layout/MainContainer";
import Intro from "./components/Intro/Intro";
import NextHours from "./components/NextHours/NextHours";
import TodayInfo from "./components/TodayInfo";
import Forecasts from "./components/Forecasts/Forecasts";
import loadingSpinner from "./assets/Rolling@1.25x-1.0s-200px-200px.svg";
import MainLayout from "./components/Layout/MainLayout";
import useWeather from "./hooks/use-weather";
import Chart from "./components/Chart/Chart";
import Cities from "./components/Cities/Cities";

import { useEffect } from "react";
import { usePositionCoordsCtx } from "./store/PositionCoordsCtxProvider";

import "./App.css";

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
      <MainLayout>
        <Header />
        <MainContainer>
          <img className="mt-14 justify-self-center" src={loadingSpinner}></img>
        </MainContainer>
      </MainLayout>
    );

  if (weather.isError)
    return (
      <MainLayout>
        <Header />
        <MainContainer>
          <p className="mt-14 justify-self-center">{weather.error}</p>
        </MainContainer>
      </MainLayout>
    );

  return (
    <MainLayout>
      <Header />
      <MainContainer>
        <div className="grid grid-cols-1 xs:px-2 xs:py-1 xs:rounded-3xl xs:bg-white xs:shadow-md">
          <Intro />
          <NextHours />
        </div>
        <TodayInfo />
        <Forecasts />
        <Chart />
        <Cities />
      </MainContainer>
    </MainLayout>
  );
}

export default App;
