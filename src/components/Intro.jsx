import sunny from "../assets/sunny.png";
import "./Intro.css";

function Intro() {
  return (
    <section className="grid grid-cols-1 px-2 mt-4 mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center text-base font-bold text-center">
          <ion-icon className="text-lg" name="location"></ion-icon>
          <span className="ml-0 mr-1">Tehran,</span>
          <span className="font-normal text-gray-500">Iran</span>
        </h2>
        <p className="text-sm text-center text-gray-500">20 Jun 2024</p>
      </div>

      <div className="flex items-center justify-center mb-0">
        <img className="w-60" src={sunny} alt="sunny icon" />
      </div>
      <div className="flex flex-col items-center mb-0">
        <p className="relative mb-0 font-bold text-center text-9xl">
          23<span className="absolute top-0 text-5xl -right-5">&deg;</span>
        </p>
        <p className="text-base leading-none text-center text-gray-500">
          Sunny
        </p>
      </div>

      <div className="flex justify-between px-2 -mt-1 ">
        <div className="flex flex-col">
          <li className="mb-0 text-xl text-center text-gray-500 wi wi-sunrise"></li>
          <p className="text-sm font-normal text-center">
            7:00 <span className="ml-0 text-xs"> AM</span>
          </p>
        </div>
        <div className="flex flex-col">
          <li className="mb-0 text-xl text-center text-gray-500 wi wi-sunset"></li>
          <p className="text-sm font-normal text-center">
            5:00 <span className="ml-0 text-xs">PM</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
