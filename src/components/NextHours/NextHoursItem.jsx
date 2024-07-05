import { SwiperSlide } from "swiper/react";

function NextHoursItem({ data }) {
  document.addEventListener("dragstart", (event) => {
    event.preventDefault();
  });
  return (
    <li className="flex flex-col items-center justify-between px-2 py-2 text-white duration-300 bg-white shadow-md select-none xs:shadow-sm xs:bg-blue-50 rounded-3xl hover:bg-blue-200">
      <p className="text-xs text-center text-gray-600 ">
        {data.dateTime.hour}
        <span className="ml-1">{data.dateTime.amOrPm}</span>
      </p>
      <img
        className="select-none w-9 max-w-none xs:w-7 "
        src={data.icon.src}
        alt={data.icon.alt}
      />
      <p className="relative text-base font-bold text-center text-gray-800">
        {data.temp}
        <span className="absolute -top-1 -right-2">&deg;</span>
      </p>
    </li>
  );
}

export default NextHoursItem;
