import sun from "../assets/sun.png";

function NextHours() {
  return (
    <section className="mb-12">
      <div className="px-5 py-4 rounded-xl bg-zinc-300">
        <h2 className="mb-3 text-base font-bold">Today</h2>
        <div className="flex gap-8 overflow-x-scroll">
          <div className="flex flex-col items-center min-w-16">
            <img className="w-10" src={sun} alt="sun image" />
            <p className="text-center">6:00 PM</p>
            <p className="relative font-bold text-center">
              23<span className="absolute -top-1 -right-2">&deg;</span>
            </p>
          </div>
          <div className="flex flex-col items-center min-w-16">
            <img className="w-10" src={sun} alt="sun image" />
            <p className="text-center">6:00 PM</p>
            <p className="relative font-bold text-center">
              23<span className="absolute -top-1 -right-2">&deg;</span>
            </p>
          </div>
          <div className="flex flex-col items-center min-w-16">
            <img className="w-10" src={sun} alt="sun image" />
            <p className="text-center">6:00 PM</p>
            <p className="relative font-bold text-center">
              23<span className="absolute -top-1 -right-2">&deg;</span>
            </p>
          </div>
          <div className="flex flex-col items-center min-w-16">
            <img className="w-10" src={sun} alt="sun image" />
            <p className="text-center">6:00 PM</p>
            <p className="relative font-bold text-center">
              23<span className="absolute -top-1 -right-2">&deg;</span>
            </p>
          </div>
          <div className="flex flex-col items-center min-w-16">
            <img className="w-10" src={sun} alt="sun image" />
            <p className="text-center">6:00 PM</p>
            <p className="relative font-bold text-center">
              23<span className="absolute -top-1 -right-2">&deg;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NextHours;
