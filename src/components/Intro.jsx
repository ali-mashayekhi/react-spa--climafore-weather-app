import sunny from "../assets/sunny.png";

function Intro() {
  return (
    <section className="grid grid-cols-1 mb-16 mt-7">
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-center">Tehran</h2>
        <p className="text-sm text-center text-gray-500">20 Jun 2024</p>
      </div>
      {/* <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-center">Tehran</h2>
        <p className="text-sm text-center text-gray-500">20 Jun 2024</p>
      </div> */}
      <div className="flex items-center justify-center">
        <img className=" w-52" src={sunny} alt="sunny icon" />
      </div>
      <div className="flex flex-col items-center">
        <p className="relative font-bold text-center text-8xl">
          23<span className="absolute top-0 text-5xl -right-5">&deg;</span>
        </p>
        <p className="text-lg font-medium leading-none text-center text-gray-500">
          Sunny
        </p>
      </div>
      <div className="flex justify-between px-5 -mt-0">
        <div>
          <h3 className="text-xs font-medium text-center text-gray-500">
            Sunrise
          </h3>
          <p className="font-bold text-center text-md">
            7:00 <span className="text-xs"> AM</span>
          </p>
        </div>
        <div>
          <h3 className="text-xs font-medium text-center text-gray-500">
            Sunset
          </h3>
          <p className="font-bold text-center text-md">
            5:00 <span className="text-xs">PM</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
