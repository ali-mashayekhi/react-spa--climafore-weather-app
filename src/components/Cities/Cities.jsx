import { useRef } from "react";

import "./Cities.css";

function Cities() {
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
    <section className="flex px-2 overflow-x-auto lg:col-span-full my-7 lg:mt-0 lg:mb-2">
      <ul
        className="flex gap-8 overflow-x-scroll scroll-hidden xs:py-2"
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseLeaveHandler}
        onMouseMove={mouseMoveHandler}
        ref={scrollableBox}
      >
        <li className="px-5 text-center border-2 border-gray-800 border-dashed rounded-xl max-w-32">
          <h3>World Forecast</h3>
          <p className="text-[10px]">Add the cities you are interested in</p>
        </li>

        <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl ">
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
        </li>
        <li className="px-5 py-3 text-center bg-white shadow-md rounded-xl">
          <h3>Tehran</h3>
          <h4 className="mb-2 text-xs">Iran</h4>
          <p className="text-xs">
            <span className="text-base">23</span>/22
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Cities;
