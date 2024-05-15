import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useWeather from "../../hooks/use-weather";
import NextHoursItem from "./NextHoursItem";
import { farToCel, fixIconsNameDif, setImageData } from "../../lib/helpers";

import "./NextHoursList.css";
import { useRef } from "react";

function NextHoursList(props) {
  const { positionCoords } = usePositionCoordsCtx();
  const { data: weatherData } = useWeather(positionCoords);
  const scrollableBox = useRef(null);

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

  let isDown = false;
  let startX;
  let startY;
  let scrollLeft;
  let scrollTop;

  function mouseDownHandler(e) {
    isDown = true;
    startX = e.pageX - scrollableBox.current.offsetLeft;
    startY = e.pageY - scrollableBox.current.offsetTop;
    scrollLeft = scrollableBox.current.scrollLeft;
    scrollTop = scrollableBox.current.scrollTop;

    scrollableBox.current.style.cursor = "grabbing";
  }

  function mouseLeaveHandler() {
    isDown = false;
    scrollableBox.current.style.cursor = "grab";
  }

  function mouseUpHandler() {
    isDown = false;
    scrollableBox.current.style.cursor = "grab";
  }

  function mouseMoveHandler(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollableBox.current.offsetLeft;
    const y = e.pageY - scrollableBox.current.offsetTop;
    const walkX = (x - startX) * 1.5; // Change this number to adjust the scroll speed
    const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
    scrollableBox.current.scrollLeft = scrollLeft - walkX;
    scrollableBox.current.scrollTop = scrollTop - walkY;
  }

  return (
    <ul
      className="relative flex gap-8 overflow-y-scroll next-hours-list scroll-hidden"
      onScroll={props.onScrollHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={scrollableBox}
    >
      {nextHours.map((nextHour) => {
        const iconName = fixIconsNameDif(
          nextHour.icon,
          weatherData.currentConditions.sunrise
        );
        const iconData = setImageData(iconName, "secondary-icon-set");

        return (
          <NextHoursItem
            key={nextHour.datetime}
            data={{
              condition: nextHour.conditions,
              temp: farToCel(+nextHour.temp),
              hour: +nextHour.datetime.slice(0, 2) % 12 || 12,
              amOrPm: +nextHour.datetime.slice(0, 2) >= 12 ? "PM" : "AM",
              icon: iconData,
            }}
          />
        );
      })}
    </ul>
  );
}

export default NextHoursList;
