function TodayInfo() {
  return (
    <section className="my-16">
      <div className="relative grid grid-cols-2 gap-x-4 gap-y-3">
        <div className="absolute rounded w-[20%] h-1 bg-black top-1/2 left-[15%]"></div>
        <div className="absolute rounded w-[20%] h-1 bg-black top-1/2 right-[15%]"></div>
        <div className="absolute rounded w-1 h-[20%] bg-black left-1/2 top-[20%]"></div>
        <div className="absolute rounded w-1 h-[20%] bg-black left-1/2 bottom-[20%]"></div>
        <div className="text-center">
          <h3>Humidity</h3>
          <p className="font-bold">50%</p>
        </div>
        <div className="text-center">
          <h3>Wind</h3>
          <p className="font-bold">24km/h</p>
        </div>
        <div className="text-center">
          <h3>Feels like</h3>
          <p className="font-bold">22</p>
        </div>
        <div className="text-center">
          <h3>Chance of rain</h3>
          <p className="font-bold">50%</p>
        </div>
      </div>
    </section>
  );
}

export default TodayInfo;
