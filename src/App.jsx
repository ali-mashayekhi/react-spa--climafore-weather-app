import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Intro from "./components/Intro";

import "./App.css";
import NextHours from "./components/NextHours/NextHours";
import TodayInfo from "./components/TodayInfo";
import Forecasts from "./components/Forecasts/Forecasts";

function App() {
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
