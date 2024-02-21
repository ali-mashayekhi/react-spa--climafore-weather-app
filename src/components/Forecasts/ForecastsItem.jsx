import sunny from "../../assets/sunny.png";

function ForecastItem() {
  return (
    <li className="px-4 py-3 bg-gray-100 rounded-2xl">
      <div className="flex items-center justify-between gap-3 ">
        <div className="flex items-center gap-4">
          <p className="text-sm">15 Feb</p>
          <img className="w-8" src={sunny} alt="sunny" />
        </div>
        <div className="flex items-center gap-7">
          <p className="relative font-bold">
            25
            <span className="absolute -top-1 -right-2">&deg;</span>
          </p>
          <p className="relative text-sm text-gray-500">
            17
            <span className="absolute -top-1 -right-2">&deg;</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-500 justify-self-end">sunny</p>
          <button className="flex items-center justify-self-end ">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex justify-between w-full mb-7">
          <div className="flex items-center justify-center">
            <p className="mr-4 text-sm">Sunrise</p>
            <p>5:00 AM</p>
          </div>
          <div className="flex items-center justify-center ">
            <p className="mr-4 text-sm">Sunset</p>
            <p>6:00 PM</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="mr-4 text-sm">chance of rain</p>
          <p>50%</p>
        </div>
      </div>
    </li>
  );
}

export default ForecastItem;
