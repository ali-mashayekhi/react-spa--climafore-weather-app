import { useRef, useState } from "react";

import "./Cities.css";
import City from "./City";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useLocation from "../../hooks/use-location";
import { useWatchCitiesCtx } from "../../store/watchCities/WatchedCitiesCtxProvider";

function Cities() {
  const scrollableBox = useRef(null);
  const { positionCoords: position, setPositionCoords: setPosition } =
    usePositionCoordsCtx();
  const currentCityData = useLocation(position);
  const currentCityName =
    currentCityData?.data?.address?.city ||
    currentCityData?.data?.address?.town ||
    currentCityData?.data?.address?.neighbourhood ||
    currentCityData?.data?.address?.village ||
    currentCityData?.data?.address?.state;

  const { watchedCities, setWatchedCities } = useWatchCitiesCtx();
  const watchedCitiesData = useLocation(watchedCities);
  const watchedCityNames = watchedCitiesData.map((location) => {
    return (
      location?.data?.address?.city ||
      location?.data?.address?.town ||
      location?.data?.address?.neighbourhood ||
      location?.data?.address?.village ||
      location?.data?.address?.state
    );
  });

  function addCityHandler() {
    if (watchedCityNames.indexOf(currentCityName) !== -1) return;
    setWatchedCities((w) => {
      return [position, ...w];
    });
  }

  function changeActiveCity(coords) {
    setPosition(coords);
  }

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
    <section className="flex px-2 overflow-x-auto lg:col-span-full my-7 lg:mt-0 lg:mb-2">
      <ul
        className="flex gap-8 overflow-x-scroll scroll-hidden xs:py-2"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        ref={scrollableBox}
      >
        <li
          className="px-5 text-center border-2 border-gray-800 border-dashed rounded-xl max-w-32"
          onClick={addCityHandler}
        >
          <h3>World Forecast</h3>
          <p className="text-[10px]">Add the cities you are interested in</p>
        </li>

        {watchedCities.map((watchedCity) => {
          return (
            <City
              positionCoords={watchedCity}
              onChangeActiveCity={changeActiveCity}
            />
          );
        })}

        {/* <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl">
          <h3>Tehran</h3>
          <h4 className="mb-2 text-xs">Iran</h4>
          <p className="text-xs">
            <span className="text-base">23</span>/22
          </p>
        </li>

        <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl">
          <h3>Tehran</h3>
          <h4 className="mb-2 text-xs">Iran</h4>
          <p className="text-xs">
            <span className="text-base">23</span>/22
          </p>
        </li>
        <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl">
          <h3>Tehran</h3>
          <h4 className="mb-2 text-xs">Iran</h4>
          <p className="text-xs">
            <span className="text-base">23</span>/22
          </p>
        </li>

        <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl">
          <h3>Tehran</h3>
          <h4 className="mb-2 text-xs">Iran</h4>
          <p className="text-xs">
            <span className="text-base">23</span>/22
          </p>
        </li>
        <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl">
          <h3>Tehran</h3>
          <h4 className="mb-2 text-xs">Iran</h4>
          <p className="text-xs">
            <span className="text-base">23</span>/22
          </p>
        </li>
        <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl">
          <h3>Tehran</h3>
          <h4 className="mb-2 text-xs">Iran</h4>
          <p className="text-xs">
            <span className="text-base">23</span>/22
          </p>
        </li> */}
      </ul>
    </section>
  );
}

export default Cities;
