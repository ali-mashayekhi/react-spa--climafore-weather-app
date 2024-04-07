import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useWeather from "../../hooks/use-weather";
import ForecastItem from "./ForecastsItem";
import { farToCel } from "../../lib/helpers";

function ForecastList(props) {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);

  console.log(weatherData);
  const nextDays = weatherData.days.slice(1);
  console.log(nextDays);

  return (
    <ul
      className="flex flex-col gap-2 overflow-scroll max-h-56"
      onScroll={props.onScrollHandler}
    >
      {nextDays.map((nextDay) => {
        const nextDayData = {
          date: nextDay.datetime,
          temp: farToCel(Math.floor(nextDay.temp)),
          tempMin: farToCel(Math.floor(nextDay.tempmin)),
          conditions: nextDay.conditions.split(",")
            ? nextDay.conditions.split(",")[0].toLowerCase()
            : nextDay.conditions.toLowerCase(),
          icon: nextDay.icon,
        };
        return <ForecastItem key={nextDayData.date} todayData={nextDayData} />;
      })}
    </ul>
  );
}

export default ForecastList;
