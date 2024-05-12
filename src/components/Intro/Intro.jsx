import useWeather from "../../hooks/use-weather";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import { farToCel, fixIconsNameDif, setImageData } from "../../lib/helpers";

import "./Intro.css";

function Intro() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);

  // importing icon dynamiclly and rename some of them from api call
  const introIconName = fixIconsNameDif(
    weatherData.currentConditions.icon,
    weatherData.currentConditions.sunrise
  );
  const introIconData = setImageData(introIconName);

  // Formating data for our usage
  const introWeatherData = {
    todayTemp: farToCel(+weatherData.currentConditions.temp),
    todaySunrise: weatherData.currentConditions.sunrise,
    todaySunset: weatherData.currentConditions.sunset,
    todayCondition: weatherData.currentConditions.conditions,
    todayIcon: introIconData,
  };

  return (
    <section className="px-2 mt-4 mb-10 xs:mb-2 lg:mt-0">
      <div className="grid content-center xs:text-center xs:items-center intro-grid-container">
        <div className="flex items-center justify-center mb-0">
          <img
            className="w-60 xs:max-w-32"
            src={introWeatherData.todayIcon.src}
            alt={introWeatherData.todayIcon.alt}
          />
        </div>
        <div className="hidden xs:flex xs:flex-col">
          <p className="xs:text-3xl xs:font-bold">Lille</p>
          <p className="xs:text-sm xs:text-gray-500">France</p>
        </div>
        <div className="flex flex-col items-center mb-0">
          <p className="relative mb-0 font-bold text-center text-9xl xs:text-3xl xs:font-bold">
            {introWeatherData.todayTemp}
            <span className="absolute top-0 text-5xl -right-5 xs:text-3xl xs:font-bold">
              &deg;
            </span>
          </p>
          <p className="text-base leading-none text-center text-gray-500 xs:text-sm xs:text-gray-500">
            {introWeatherData.todayCondition}
          </p>
        </div>

        <div className="flex justify-between px-2 -mt-1 text-center xs:grid xs:grid-cols-2 xs:px-0 ">
          <div className="flex flex-col">
            <div className="xs:hidden">
              <li className="mb-0 text-xl text-center text-gray-500 wi wi-sunrise"></li>
            </div>
            <p className="text-sm font-normal text-center xs:text-3xl xs:font-bold">
              {formatTime(introWeatherData.todaySunrise)}
              <span className="ml-1 text-xs xs:text-sm xs:text-gray-500 xs:font-normal">
                AM
              </span>
            </p>
            <p className="hidden xs:block xs:text-sm xs:text-gray-500">
              Sunrise
            </p>
          </div>
          <div className="flex flex-col">
            <div className="xs:hidden">
              <li className="mb-0 text-xl text-center text-gray-500 wi wi-sunset"></li>
            </div>
            <p className="text-sm font-normal text-center xs:text-3xl xs:font-bold">
              {formatTime(introWeatherData.todaySunset)}
              <span className="ml-1 text-xs xs:text-sm xs:text-gray-500 xs:font-normal">
                PM
              </span>
            </p>
            <p className="hidden xs:block xs:text-sm xs:text-gray-500">
              Sunset
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

function formatTime(time) {
  const timeArr = time.split(":");
  return timeArr[0] + ":" + timeArr[1];
}
