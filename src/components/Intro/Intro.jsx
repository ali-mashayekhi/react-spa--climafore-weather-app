import sunny from "../../assets/sunny.png";
import "./Intro.css";
import useWeather from "../../hooks/use-weather";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import { farToCel } from "../../lib/helpers";

function Intro() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);

  const introWeatherData = {
    todayTemp: farToCel(+weatherData.currentConditions.temp),
    todaySunrise: weatherData.currentConditions.sunrise,
    todaySunset: weatherData.currentConditions.sunset,

    todayCondition: weatherData.currentConditions.conditions,
  };
  console.log(introWeatherData);

  return (
    <section className="grid grid-cols-1 px-2 mt-4 mb-10">
      <div className="flex items-center justify-center mb-0">
        <img className="w-60" src={sunny} alt="sunny icon" />
      </div>
      <div className="flex flex-col items-center mb-0">
        <p className="relative mb-0 font-bold text-center text-9xl">
          {introWeatherData.todayTemp}
          <span className="absolute top-0 text-5xl -right-5">&deg;</span>
        </p>
        <p className="text-base leading-none text-center text-gray-500">
          {introWeatherData.todayCondition}
        </p>
      </div>

      <div className="flex justify-between px-2 -mt-1 ">
        <div className="flex flex-col">
          <li className="mb-0 text-xl text-center text-gray-500 wi wi-sunrise"></li>
          <p className="text-sm font-normal text-center">
            {formatTime(introWeatherData.todaySunrise)}
            <span className="ml-1 text-xs">AM</span>
          </p>
        </div>
        <div className="flex flex-col">
          <li className="mb-0 text-xl text-center text-gray-500 wi wi-sunset"></li>
          <p className="text-sm font-normal text-center">
            {formatTime(introWeatherData.todaySunset)}
            <span className="ml-1 text-xs">PM</span>
          </p>
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