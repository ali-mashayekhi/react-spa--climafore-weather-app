import useWeather from "../../hooks/use-weather";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import { farToCel, fixIconsNameDif, setImageData } from "../../lib/helpers";
import TodayInfo from "./TodayInfo";

import "./Intro.css";

function Intro() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);

  // importing icon dynamiclly and rename some of them from api call
  const introIconName = fixIconsNameDif(
    weatherData.currentConditions.icon,
    weatherData.currentConditions.sunrise
  );
  const introIconData = setImageData(introIconName, "main-icon-set");

  // Formating data for our usage
  const introWeatherData = {
    todayTemp: farToCel(+weatherData.currentConditions.temp),
    todayCondition: weatherData.currentConditions.conditions.indexOf(",")
      ? weatherData.currentConditions.conditions.split(",")[0]
      : weatherData.currentConditions.conditions,
    todayIcon: introIconData,
  };

  return (
    <section className="px-0 mt-4 mb-1 xs:mb-0 lg:mt-0 xs:px-2">
      <div className="flex flex-col xs:flex-row xs:gap-12">
        <div className="px-4 py-3 xs:px-0 xs:py-0">
          <div className="flex items-center justify-between mb-4 pr-9 xs:pr-0 xs:gap-12 xs:mb-0 xs:justify-normal">
            <img
              className="max-w-40 xs:max-w-32"
              src={introWeatherData.todayIcon.src}
              alt={introWeatherData.todayIcon.alt}
            />
            <div className="flex-col hidden xs:flex">
              <p className="text-2xl font-bold ">Tehran</p>
              <p className="text-sm text-gray-500">Iran</p>
            </div>
            <div className="flex flex-col text-left">
              <p className="relative text-6xl font-bold xs:text-2xl">
                {introWeatherData.todayTemp}
                <span className="hidden xs:inline">&deg;</span>
                <span className="xs:hidden">
                  <span className="absolute text-4xl -right-3 top-1">
                    &deg;
                  </span>
                  <span className="absolute text-4xl top-1 -right-9">C</span>
                </span>
              </p>
              <p className="pl-1 text-gray-500 xs:text-sm max-w-16 xs:max-w-none">
                {introWeatherData.todayCondition}
              </p>
            </div>
          </div>
        </div>
        <TodayInfo />
      </div>
    </section>
  );
}

export default Intro;
