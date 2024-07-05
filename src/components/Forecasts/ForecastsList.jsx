import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useWeather from "../../hooks/use-weather";
import ForecastItem from "./ForecastsItem";
import { farToCel, fixIconsNameDif, setImageData } from "../../lib/helpers";

function ForecastList(props) {
  const { positionCoords } = usePositionCoordsCtx();
  const {
    data: { days: weatherData },
  } = useWeather(positionCoords);

  return (
    <ul
      className="flex flex-col gap-3 overflow-scroll overflow-x-hidden bg-white max-h-44"
      onScroll={props.onScrollHandler}
    >
      {weatherData.map((nextDay, index) => {
        const iconName = fixIconsNameDif(nextDay.icon, nextDay.sunrise);
        const iconData = setImageData(iconName, "secondary-icon-set");

        const nextDayData = {
          ...nextDay,
          icon: iconData,
        };
        return <ForecastItem key={index} todayData={nextDayData} />;
      })}
    </ul>
  );
}

export default ForecastList;
