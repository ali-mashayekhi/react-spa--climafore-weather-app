import "./ForecastsItem.css";

function ForecastItem({ todayData }) {
  return (
    <li className="px-8 py-2 shadow-sm bg-blue-50 rounded-2xl">
      <div className="grid justify-between gap-4 forcasts-items-grid-cols">
        <div className="flex items-center gap-4  min-w-[5.8rem] ">
          <p className="text-sm">{todayData.dateTime}</p>
          <img
            className="w-8"
            src={todayData.icon.src}
            alt={todayData.icon.alt}
          />
        </div>

        <div className="flex items-center gap-7">
          <p className="relative font-bold">
            {todayData.temp}
            <span className="absolute -top-1 -right-2">&deg;</span>
          </p>
          <p className="relative text-sm text-gray-500">
            {todayData.tempMin}
            <span className="absolute -top-1 -right-2">&deg;</span>
          </p>
        </div>

        <div className="flex items-center justify-end gap-4">
          <p className="text-sm text-right text-gray-500">
            {todayData.conditions}
          </p>

          {/* <button className="flex items-center justify-self-end ">
            <ion-icon name="chevron-down-outline"></ion-icon>
          </button> */}
        </div>
      </div>
    </li>
  );
}

export default ForecastItem;
