import useWeather from "../../hooks/use-weather";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import { fixIconsNameDif, setImageData } from "../../lib/helpers";
import TodayInfo from "./TodayInfo";

import "./Intro.css";
import { useTempUnitCtx } from "../../store/tempUnit/TempUnitCtxProvider";
import useLocation from "../../hooks/use-location";

function Intro() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: location } = useLocation(positionCoords);

  const {
    data: {
      days: [weatherData],
    },
  } = useWeather(positionCoords);

  const { tempUnit } = useTempUnitCtx();

  // importing icon dynamiclly and rename some of them from api call
  const introIconName = fixIconsNameDif(weatherData.icon, weatherData.sunrise);
  const introIconData = setImageData(introIconName, "main-icon-set");

  // Formating data for our usage
  // const introWeatherData = {
  //   todayTemp:
  //     tempUnit === "cel" ? farToCel(+weatherData.temp) : weatherData.temp,
  //   todayCondition: weatherData.conditions.indexOf(",")
  //     ? weatherData.conditions.split(",")[0]
  //     : weatherData.conditions,
  //   todayIcon: introIconData,
  // };

  return (
    <section className="px-0 mt-4 mb-1 xs:mb-0 lg:mt-0 xs:px-2">
      <div className="flex flex-col xs:flex-row xs:gap-12">
        <div className="px-4 py-3 xs:px-0 xs:py-0">
          <div className="flex items-center justify-between mb-4 pr-9 xs:pr-0 xs:gap-12 xs:mb-0 xs:justify-normal">
            <img
              className="max-w-40 xs:max-w-32"
              src={introIconData.src}
              alt={introIconData.alt}
            />
            <div className="flex-col hidden xs:flex">
              <p className="text-2xl font-bold">
                {location?.address.city ||
                  location?.address.town ||
                  location?.address.neighbourhood ||
                  location?.address.village ||
                  location?.address.state}
              </p>
              <p className="text-gray-500 ftext-sm">
                {location?.address.country}
              </p>
            </div>
            <div className="flex flex-col text-left">
              <p className="relative text-6xl font-bold xs:text-2xl">
                {weatherData.temp}
                <span className="hidden xs:inline">&deg;</span>
                <span className="xs:hidden">
                  <span className="absolute text-4xl -right-3 top-1">
                    &deg;
                  </span>
                  <span className="absolute text-4xl top-1 -right-9">
                    {tempUnit === "cel" ? "C" : "F"}
                  </span>
                </span>
              </p>
              <p className="pl-1 text-gray-500 xs:text-sm max-w-16 xs:max-w-none">
                {weatherData.conditions}
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
