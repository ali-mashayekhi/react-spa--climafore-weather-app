import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useWeather from "../../hooks/use-weather";
import NextHoursItem from "./NextHoursItem";
import { farToCel, fixIconsNameDif, setImageData } from "../../lib/helpers";

import "./NextHoursList.css";
import { useRef } from "react";

function NextHoursList(props) {
  const { positionCoords } = usePositionCoordsCtx();
  const {
    data: {
      days: [weatherData],
    },
  } = useWeather(positionCoords);

  const scrollableBox = useRef(null);

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
      className="relative flex gap-3 py-1 overflow-y-scroll next-hours-list scroll-hidden "
      onScroll={props.onScrollHandler}
      onMouseDown={mouseDownHandler}
      onMouseUp={mouseUpHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={scrollableBox}
    >
      {weatherData.hours.map((nextHour, index) => {
        const iconName = fixIconsNameDif(nextHour.icon, weatherData.sunrise);
        const iconData = setImageData(iconName, "secondary-icon-set");

        return (
          <NextHoursItem
            key={index}
            data={{
              ...nextHour,
              icon: iconData,
            }}
          />
        );
      })}
    </ul>
  );
}

export default NextHoursList;
