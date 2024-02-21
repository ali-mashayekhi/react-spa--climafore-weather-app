import ForecastItem from "./ForecastsItem";

function ForecastList() {
  return (
    <ul className="flex flex-col gap-2">
      <ForecastItem />
      <ForecastItem />
      <ForecastItem />
    </ul>
  );
}

export default ForecastList;
