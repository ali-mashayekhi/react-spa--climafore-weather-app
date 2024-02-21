import NextHoursItem from "./NextHoursItem";
import "./NextHoursList.css";

function NextHoursList(props) {
  return (
    <ul
      className="relative flex gap-8 overflow-x-scroll next-hours-list"
      onScroll={props.onScrollHandler}
    >
      <NextHoursItem />
      <NextHoursItem />
      <NextHoursItem />
      <NextHoursItem />
      <NextHoursItem />
      <NextHoursItem />
      <NextHoursItem />
    </ul>
  );
}

export default NextHoursList;
