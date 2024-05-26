import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "Today",
      tempreture: 23,
    },
    { name: "Tommorrow", tempreture: 25 },
    { name: "14/5", tempreture: 10 },
    { name: "14/5", tempreture: 11 },
    { name: "15/5", tempreture: 18 },
    { name: "16/5", tempreture: 20 },
    { name: "17/5", tempreture: 23 },
  ];

  return (
    <section className="my-8 bg-white shadow-md lg:row-start-2 rounded-3xl lg:col-start-1 lg:my-0">
      <div className="px-0 py-6 lg:py-4 lg:pb-3">
        <div className="flex justify-between px-2 mb-4">
          <h2 className="mb-2 text-2xl font-bold">Overview</h2>
          <div className="flex items-center gap-3 px-3 text-sm text-gray-200 bg-blue-800 rounded-full">
            <p>Tempreture</p>
            <p>Humidity</p>
            <p>UV</p>
          </div>
        </div>
        <div className="mr-6 -ml-2">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart width={400} height={400} data={data}>
              <Line
                type="monotone"
                dataKey="tempreture"
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
