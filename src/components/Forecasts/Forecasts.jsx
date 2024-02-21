import ForecastList from "./ForecastsList";

function Forecasts() {
  return (
    <section className="my-8 bg-gray-200 rounded-3xl">
      <div className="px-5 py-5">
        <h2 className="px-1 mb-2 text-xl font-bold">Forecast</h2>
        <ForecastList />
      </div>
    </section>
  );
}

export default Forecasts;
