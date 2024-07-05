import { useQuery } from "@tanstack/react-query";
import search from "../../../assets/search.svg";
import { useRef, useState } from "react";
import { usePositionCoordsCtx } from "../../../store/PositionCoordsCtxProvider";

function Search() {
  const [input, setInput] = useState("");
  const { setPositionCoords } = usePositionCoordsCtx();
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const searchIconInputRef = useRef(null);

  const prefferedCities = useQuery({
    queryKey: ["search", input],
    queryFn: fetchSearch,
    enabled: !!input,
  });

  const citiesData = prefferedCities?.data?.slice(0, 5);

  function getInputHandler(e) {
    setInput(e.target.value);
    if (e.target.value !== "") setIsOpen(true);
    else setIsOpen(false);
  }

  async function fetchSearch() {
    const response = await fetch(
      `https://autocomplete.travelpayouts.com/places2?locale=en&types[]=city&term=${input}`
    );
    if (!response.ok) throw new Error("something went wrong!");
    return response.json();
  }

  function showCity(cityData) {
    console.log(cityData.coordinates);
    setInput("");
    setPositionCoords(cityData.coordinates);
    setIsOpen(false);
  }

  document.addEventListener("click", (e) => {
    if (isOpen === false) return;
    if (e.target === inputRef.current) return;
    else if (e.target === searchIconInputRef.current) return;
    else setIsOpen(false);
  });

  return (
    <div
      className={`relative w-[21.1805vw] bg-white shadow z-50  ${
        isOpen ? "rounded-t-[20px]" : "rounded-full"
      }`}
    >
      <form className="relative ">
        <input
          type="text"
          placeholder="search"
          className={`py-2 bg-transparent px-11  ${
            isOpen
              ? "focus:outline-none"
              : "focus:outline-gray-400 rounded-full"
          }`}
          onChange={getInputHandler}
          value={input}
          ref={inputRef}
        />
        <img
          src={search}
          alt="search logo"
          className="absolute -translate-y-1/2 top-1/2 left-2"
          ref={searchIconInputRef}
        />
      </form>
      <div
        className={`absolute w-full top-10 bg-white ${
          isOpen ? "rounded-b-[20px] shadow-2xl" : ""
        }`}
      >
        {citiesData &&
          isOpen &&
          citiesData.map((cityData, i) => {
            return (
              <div
                className="relative w-full py-3 cursor-pointer px-11 hover:bg-gray-200"
                onClick={() => {
                  showCity(cityData);
                }}
              >
                {" "}
                <img
                  src={search}
                  alt="search logo"
                  className="absolute w-5 -translate-y-1/2 top-1/2 left-3"
                />
                <p>{cityData.name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
