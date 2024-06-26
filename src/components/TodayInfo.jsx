import { usePositionCoordsCtx } from "../store/PositionCoordsCtxProvider";
import useWeather from "../hooks/use-weather";

import "./TodayInfo.css";
import { farToCel } from "../lib/helpers";

function TodayInfo() {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);

  const formatedWeatherData = {
    feelsLike: farToCel(Math.floor(weatherData.currentConditions.feelslike)),
    humidity: Math.floor(weatherData.currentConditions.humidity),
    windSpeed: Math.floor(weatherData.currentConditions.windspeed),
    cloudCover: Math.floor(weatherData.currentConditions.cloudcover),
  };

  return (
    <section className="flex justify-center px-4 my-8 lg:items-center rounded-3xl lg:row-start-1 lg:my-0 lg:col-start-2">
      <div className="relative grid max-w-lg grid-cols-2 gap-0 grow ">
        <div className="flex flex-col items-center gap-7">
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Humidity</h3>
              <p className="font-bold">{formatedWeatherData.humidity}%</p>
            </div>
            {/* <i className="text-3xl text-gray-500 wi wi-humidity "></i> */}
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Wind Speed</h3>
              <p className="font-bold">{formatedWeatherData.windSpeed}km/h</p>
            </div>
            {/* <i className="text-3xl text-gray-500 wi wi-strong-wind"></i> */}
          </div>
        </div>
        <div className="flex flex-col items-center pl-6 gap-7">
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Feels like</h3>
              <p className="relative font-bold">
                {formatedWeatherData.feelsLike}
                <span className="absolute -top-1 ">&deg;</span>
              </p>
            </div>
            {/* <i className="text-3xl text-gray-500 wi wi-thermometer"></i> */}
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Cloud Cover</h3>
              <p className="font-bold">{formatedWeatherData.cloudCover}%</p>
            </div>
            {/* <i className="text-3xl text-gray-500 wi wi-showers"></i> */}
          </div>
        </div>

        {/* <div className="absolute rounded w-[2px] h-[100%] bg-gray-400 left-1/2 top-0 divider-line"></div> */}
      </div>
    </section>
  );
}

export default TodayInfo;
