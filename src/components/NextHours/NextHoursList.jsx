import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useWeather from "../../hooks/use-weather";
import NextHoursItem from "./NextHoursItem";

import "./NextHoursList.css";
import { farToCel } from "../../lib/helpers";

function NextHoursList(props) {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);

  const time = new Date();
  let nextHours = [];

  const todayNextHours = weatherData.days[0].hours.filter((hour) => {
    return +hour.datetime.slice(0, 2) > time.getHours() + 1;
  });

  // Set nextHours array which has next 24 hours
  if (todayNextHours.length < 24) {
    const tommorrowNextHours = weatherData.days[1].hours.slice(
      0,
      24 - todayNextHours.length
    );
    nextHours = todayNextHours.concat(tommorrowNextHours);
  } else nextHours = todayNextHours;

  return (
    <ul
      className="relative flex gap-8 overflow-x-scroll next-hours-list"
      onScroll={props.onScrollHandler}
    >
      {nextHours.map((nextHour) => {
        return (
          <NextHoursItem
            key={nextHour.datetime}
            data={{
              condition: nextHour.conditions,
              temp: farToCel(+nextHour.temp),
              hour: +nextHour.datetime.slice(0, 2) % 12 || 12,
              amOrPm: +nextHour.datetime.slice(0, 2) >= 12 ? "PM" : "AM",
            }}
          />
        );
      })}
    </ul>
  );
}

export default NextHoursList;
