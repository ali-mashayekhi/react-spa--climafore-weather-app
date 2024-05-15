import { useState } from "react";
import NextHoursList from "./NextHoursList";

import "./NextHours.css";

function NextHours() {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  function scrollHandler(e) {
    const listEl = e.target;
    const scrollableWidth = listEl.scrollWidth - listEl.clientWidth;

    Math.round(listEl.scrollLeft > 0)
      ? setIsAtStart(false)
      : setIsAtStart(true);

    Math.round(scrollableWidth) === Math.round(listEl.scrollLeft)
      ? setIsAtEnd(true)
      : setIsAtEnd(false);
  }

  return (
    <section className="mb-8 lg:mb-0">
      <div className="px-5 py-5 bg-gray-200 rounded-3xl xs:py-4 xs:pb-3">
        <div className="relative ">
          <NextHoursList onScrollHandler={scrollHandler} />
          {!isAtStart && <div className="fade-effect-before"></div>}
          {!isAtEnd && <div className="fade-effect-after"></div>}
        </div>
      </div>
    </section>
  );
}
export default NextHours;
