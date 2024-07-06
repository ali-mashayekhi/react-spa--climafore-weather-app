import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { usePositionCoordsCtx } from "../../store/PositionCoordsCtxProvider";
import useWeather from "../../hooks/use-weather";

function Chart() {
  const { positionCoords } = usePositionCoordsCtx();
  const {
    data: { days: weatherDays },
  } = useWeather(positionCoords);
  const [element, setElement] = useState({ title: "tempreture", id: "1" });
  const [activeElementWidth, setActiveElementWidth] = useState(null);

  function setActiveElement(e) {
    const targetId = e.target.id;
    setActiveElementWidth(e.target.offsetWidth);

    if (targetId === "1") {
      setElement({ title: "tempreture", id: "1" });
    } else if (targetId === "2") {
      setElement({ title: "humidity", id: "2" });
    } else if (targetId === "3") {
      setElement({ title: "uv", id: "3" });
    }
  }

  const buttons = ["Tempreture", "Humidity", "UV"];

  const data = weatherDays
    .map((day) => {
      return {
        name: day.dateTime,
        tempreture: day.temp,
        uv: day.uv,
        humidity: day.humidity,
      };
    })
    .slice(0, 7);

  return (
    <section className="my-8 bg-white shadow-md lg:row-start-2 rounded-3xl lg:col-start-1 lg:my-0">
      <div className="px-0 py-6 lg:py-4 lg:pb-3">
        <div className="px-5 mb-4 md:justify-between md:flex md:flex-row">
          <h2 className="mb-2 text-2xl font-bold">Overview</h2>
          <div className="relative flex items-center text-sm text-gray-200 rounded-full bg-blue-50 max-h-9 min-h-9">
            {buttons.map((button, i) => (
              <button
                onClick={setActiveElement}
                className={`z-20 h-full px-4 rounded-full duration-300 ${
                  `${i + 1}` !== element.id ? "text-gray-800" : "text-white"
                } `}
                id={i + 1}
              >
                {button}
              </button>
            ))}

            <div
              className={`absolute bg-blue-800 h-full rounded-full duration-300 z-10 ${
                element.id === "1" ? "w-[110px] left-0" : ""
              } ${element.id === "2" ? "w-[92px] left-[110px]" : ""}
               ${element.id === "3" ? "w-[51px] left-[202px]" : ""}`}
            ></div>
          </div>
        </div>
        <div className="mr-6 -ml-2">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart width={400} height={400} data={data}>
              <Line
                type="monotone"
                dataKey={element.title}
                stroke="#1e40af"
                strokeWidth={3}
              />
              <CartesianGrid
                stroke="#ccc"
                strokeDasharray="5 5"
                vertical={false}
              />

              <XAxis
                dataKey="name"
                axisLine={false}
                padding={{ left: 20, right: 20 }}
                tickLine={false}
                tickMargin={10}
                tick={{ fill: "#1e40af", fontSize: "12px" }}
              />
              <YAxis
                // dataKey={element}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
                tick={{ fill: "#1e40af", fontSize: "12px" }}
              />

              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}

export default Chart;

function ToggleBtn({ children }) {
  return (
    <button
      onClick={setElementToTempreture}
      className="px-2 bg-blue-800 rounded-full"
    >
      {children}
    </button>
  );
}
