import Header from "./components/Header/Header";
import MainContainer from "./components/Layout/MainContainer";
import Intro from "./components/Intro/Intro";
import NextHours from "./components/NextHours/NextHours";
import Forecasts from "./components/Forecasts/Forecasts";
import loadingSpinner from "./assets/Rolling@1.25x-1.0s-200px-200px.svg";
import MainLayout from "./components/Layout/MainLayout";
import useWeather from "./hooks/use-weather";
import Chart from "./components/Chart/Chart";
import Cities from "./components/Cities/Cities";
import Map from "./components/Map/Map";

import { usePositionCoordsCtx } from "./store/PositionCoordsCtxProvider";
import useSetCoords from "./hooks/use-set-coords";

import "./App.css";

function App() {
  const PositionCoordsCtx = usePositionCoordsCtx();
  const weather = useWeather(PositionCoordsCtx.positionCoords);

  // Set the coords
  const coordsStatus = useSetCoords();

  if (coordsStatus.error)
    return (
      <MainLayout>
        <Header />
        <MainContainer>
          <p className="text-lg font-bold text-red-900 mt-14 justify-self-center">
            {coordsStatus.error.message}
          </p>
        </MainContainer>
      </MainLayout>
    );

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
          <p className="text-lg font-bold text-red-900 mt-14 justify-self-center">
            There is a problem in getting data from server!
          </p>
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
        <Map />
        <Forecasts />
        <Chart />
        <Cities />
      </MainContainer>
    </MainLayout>
  );
}

export default App;
