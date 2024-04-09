import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useWeather from "../../hooks/use-weather";
import ForecastItem from "./ForecastsItem";
import { farToCel, fixIconsNameDif } from "../../lib/helpers";
import useImage from "../../hooks/use-image";

function ForecastList(props) {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);
  const nextDays = weatherData.days.slice(1);

  return (
    <ul
      className="flex flex-col gap-2 overflow-scroll max-h-56"
      onScroll={props.onScrollHandler}
    >
      {nextDays.map((nextDay) => {
        const iconName = fixIconsNameDif(
          nextDay.icon,
          weatherData.currentConditions.sunrise
        );
        const iconData = {
          src: useImage(iconName),
          alt: `${
            iconName.split("-") ? iconName.split("-").join(" ") : iconName
          } icon`,
        };

        const nextDayData = {
          date: nextDay.datetime,
          temp: farToCel(Math.floor(nextDay.temp)),
          tempMin: farToCel(Math.floor(nextDay.tempmin)),
          conditions: nextDay.conditions.split(",")
            ? nextDay.conditions.split(",")[0].toLowerCase()
            : nextDay.conditions.toLowerCase(),
          icon: iconData,
        };
        return <ForecastItem key={nextDayData.date} todayData={nextDayData} />;
      })}
    </ul>
  );
}

export default ForecastList;
