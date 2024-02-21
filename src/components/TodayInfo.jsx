import "./TodayInfo.css";

function TodayInfo() {
  return (
    <section className="my-8">
      <div className="relative grid grid-cols-2 gap-0 px-6">
        {/* <div className="absolute rounded w-[20%] h-0.5 bg-gray-500 top-1/2 left-[15%]"></div>
        <div className="absolute rounded w-[20%] h-0.5 bg-gray-500 top-1/2 right-[15%]"></div>
        <div className="absolute rounded w-[3px] h-[20%] bg-gray-500 left-1/2 top-[20%]"></div>
        <div className="absolute rounded w-[3px] h-[20%] bg-gray-500 left-1/2 bottom-[20%]"></div> */}
        <div className="absolute rounded w-[2px] h-[100%] bg-gray-400 left-1/2 top-0 divider-line"></div>

        <div className="flex flex-col items-start gap-7">
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Humidity</h3>
              <p className="font-bold">50%</p>
            </div>
            <i className="text-3xl text-gray-500 wi wi-humidity "></i>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Wind</h3>
              <p className="font-bold">24km/h</p>
            </div>
            <i className="text-3xl text-gray-500 wi wi-strong-wind"></i>
          </div>
        </div>
        <div className="flex flex-col items-start pl-6 gap-7">
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Feels like</h3>
              <p className="relative font-bold">
                22 <span className="absolute -top-1 ">&deg;</span>
              </p>
            </div>
            <i className="text-3xl text-gray-500 wi wi-thermometer"></i>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="text-left">
              <h3 className="text-sm text-gray-500">Chance of rain</h3>
              <p className="font-bold">50%</p>
            </div>
            <i className="text-3xl text-gray-500 wi wi-showers"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodayInfo;
