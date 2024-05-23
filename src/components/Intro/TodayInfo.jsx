function TodayInfo() {
  return (
    <div className="flex justify-between px-8 py-3 bg-white rounded-full shadow-md xs:px-0 xs:py-0 xs:rounded-none xs:shadow-none xs:gap-14 xs:items-center">
      <div className="text-center xs:text-left">
        <p className="xs:text-2xl xs:font-bold">8</p>
        <p className="xs:text-sm">Wind Speed</p>
      </div>
      <div className="text-center xs:text-left ">
        <p className="xs:text-2xl xs:font-bold">18</p>
        <p className="xs:text-sm">Feels Like</p>
      </div>
      <div className="text-center xs:text-left">
        <p className="xs:text-2xl xs:font-bold">79</p>
        <p className="xs:text-sm">Humidity</p>
      </div>
    </div>
  );
}

export default TodayInfo;
