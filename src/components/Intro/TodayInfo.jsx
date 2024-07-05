import useWeather from "../../hooks/use-weather";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";

function TodayInfo() {
  const { positionCoords } = usePositionCoordsCtx();
  const {
    data: {
      days: [weatherData],
    },
  } = useWeather(positionCoords);

  return (
    <div className="flex justify-between px-6 py-3 bg-white rounded-full shadow-md xs:px-0 xs:py-0 xs:rounded-none xs:shadow-none xs:gap-12 xs:items-center">
      <div className="grid text-center xs:text-left">
        <p className="text-sm font-bold xs:text-2xl">
          {weatherData.windSpeed}
          <span className="text-xs xs:text-xl">km/h</span>
        </p>
        <p className="row-start-1 text-sm text-gray-500 xs:row-start-2">
          Wind Speed
        </p>
      </div>
      <div className="grid text-center xs:text-left xs:hidden">
        <p className="text-sm font-bold xs:text-2xl ">
          {weatherData.feelsLike}
          <span>&deg;</span>
        </p>
        <p className="row-start-1 text-sm text-gray-500 xs:row-start-2 ">
          Feels Like
        </p>
      </div>
      <div className="grid text-center xs:text-left">
        <p className="text-sm font-bold xs:text-2xl">
          {weatherData.humidity}
          <span>%</span>
        </p>
        <p className="row-start-1 text-sm text-gray-500 xs:row-start-2">
          Humidity
        </p>
      </div>
    </div>
  );
}

export default TodayInfo;
