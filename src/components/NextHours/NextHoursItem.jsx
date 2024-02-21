import sunny from "../../assets/sunny.png";

function NextHoursItem() {
  return (
    <li className="flex flex-col items-center ">
      <p className="text-xs text-center text-gray-600">
        6<span className="ml-1">PM</span>
      </p>
      <img className="w-9 max-w-none" src={sunny} alt="sun image" />
      <p className="relative text-base font-bold text-center">
        23<span className="absolute -top-1 -right-2">&deg;</span>
      </p>
    </li>
  );
}

export default NextHoursItem;
