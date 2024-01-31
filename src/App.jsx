import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import Intro from "./components/Intro";

import "./App.css";
import NextHours from "./components/NextHours";
import TodayInfo from "./components/TodayInfo";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        <NextHours />
        <TodayInfo />
      </Main>
    </>
  );
}

export default App;
