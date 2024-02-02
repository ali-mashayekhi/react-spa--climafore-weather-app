import sunny from "../assets/sunny.png";
import "./Intro.css";

function Intro() {
  return (
    <section className="grid grid-cols-1 mt-20 mb-40">
      <div className="flex items-center justify-between mb-16">
        <h2 className="flex items-center text-base font-bold text-center">
          <ion-icon name="location"></ion-icon>
          <span className="ml-3 mr-3">Tehran,</span>
          <span className="font-normal text-gray-500">Iran</span>
        </h2>
        <p className="text-sm text-center text-gray-500">20 Jun 2024</p>
      </div>

      <div className="flex items-center justify-center mb-10">
        <img className="w-64" src={sunny} alt="sunny icon" />
      </div>
      <div className="flex flex-col items-center mb-10">
        <p className="relative mb-6 font-bold text-center text-9xl">
          23<span className="absolute top-0 text-5xl -right-5">&deg;</span>
        </p>
        <p className="text-base leading-none text-center text-gray-500">
          Sunny
        </p>
      </div>

      <div className="flex justify-between px-8 -mt-0">
        <div className="flex flex-col">
          <li className="mb-3 text-xl text-center text-gray-500 wi wi-sunrise"></li>
          <p className="text-base font-bold text-center">
            7:00 <span className="ml-2 text-sm"> AM</span>
          </p>
        </div>
        <div className="flex flex-col">
          <li className="mb-3 text-xl text-center text-gray-500 wi wi-sunset"></li>
          <p className="text-base font-bold text-center">
            5:00 <span className="ml-2 text-sm">PM</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
