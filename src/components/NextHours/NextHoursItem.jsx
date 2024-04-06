import sunny from "../../assets/sunny.png";

function NextHoursItem({ data }) {
  return (
    <li className="flex flex-col items-center ">
      <p className="text-xs text-center text-gray-600">
        {data.hour}
        <span className="ml-1">{data.amOrPm}</span>
      </p>
      <img className="w-9 max-w-none" src={sunny} alt="sun image" />
      <p className="relative text-base font-bold text-center">
        {data.temp}
        <span className="absolute -top-1 -right-2">&deg;</span>
      </p>
    </li>
  );
}

export default NextHoursItem;
