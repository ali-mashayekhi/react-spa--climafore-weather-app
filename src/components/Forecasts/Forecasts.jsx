import { useState } from "react";
import ForecastList from "./ForecastsList";

import "./Forecasts.css";

function Forecasts() {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  function scrollHandler(e) {
    const listEl = e.target;
    const scrollableHeight = listEl.scrollHeight - listEl.clientHeight;

    Math.round(listEl.scrollTop > 0) ? setIsAtStart(false) : setIsAtStart(true);

    Math.round(scrollableHeight) === Math.round(listEl.scrollTop)
      ? setIsAtEnd(true)
      : setIsAtEnd(false);
  }
  return (
    <section className="my-3 bg-white shadow-md rounded-3xl lg:my-0 lg:col-start-2 lg:row-start-2">
      <div className="px-5 py-5 lg:pt-4 lg:pb-3 lg:mb-5">
        <h2 className="px-1 mb-2 text-2xl font-bold">Forecast</h2>
        <div className="relative">
          <ForecastList onScrollHandler={scrollHandler} />
          {!isAtStart && <div className="forecasts-fade-effect-before"></div>}
          {!isAtEnd && <div className="forecasts-fade-effect-after"></div>}
        </div>
      </div>
    </section>
  );
}

export default Forecasts;
