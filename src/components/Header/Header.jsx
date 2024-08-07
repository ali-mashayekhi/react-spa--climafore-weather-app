import hamburger from "../../assets/hamburger.svg";
import close from "../../assets/close.svg";
import Location from "./Location";

import "./Header.css";

import { useTempUnitCtx } from "../../store/tempUnit/TempUnitCtxProvider";
import Search from "./Search/Search";
import { useState } from "react";

function Header() {
  const { tempUnit, setTempUnit } = useTempUnitCtx();
  const [isOpen, setIsOpen] = useState(false);

  function tempUnitChangeHandler() {
    setTempUnit(tempUnit === "cel" ? "far" : "cel");
  }

  const date = new Date();
  const dateString = `${date.toLocaleString("default", {
    weekday: "short",
  })}, ${date.getDate()} ${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;

  function openMenuHandler() {
    setIsOpen(true);
  }

  function closeMenuHandler() {
    setIsOpen(false);
  }

  return (
    <header className="h-16 xs:my-3 lg:mb-3 lg:mt-4 lg:h-auto">
      {/* Moblie Header */}
      <div className="flex flex-row-reverse items-center justify-between h-full overflow-x-hidden xs:hidden">
        <img
          className="h-4"
          src={hamburger}
          alt="hamburger icon "
          onClick={openMenuHandler}
        />
        <Location />
        <div
          className={`absolute top-0 right-0 z-40 w-full px-5 h-screen duration-500 bg-blue-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img src={close} alt="" className="mt-5" onClick={closeMenuHandler} />
          <Search onCloseMenuHandler={closeMenuHandler} />
          {/* <div className="dark-mod-btn">
            <input
              className="hidden w-0 h-0 darkmod-btn"
              type="checkbox"
              id="darkmod-toggle"
            />

            <label
              htmlFor="darkmod-toggle"
              className="relative block w-[88px] h-10 bg-white rounded-full cursor-pointer toggle-shadow shadow"
            >
              <svg
                className="sun"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
                  fill="#1C274C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
                  fill="#1C274C"
                />
              </svg>

              <svg
                className="moon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#1C274C"
                />
              </svg>
            </label>
          </div> */}
          {/* <div className="temp-btn ">
            <input
              type="checkbox"
              id="temp-input"
              className="hidden w-0 h-0 temp-btn__input"
              onChange={tempUnitChangeHandler}
            />
            <label
              htmlFor="temp-input"
              className="relative block w-[88px] h-10 bg-white shadow rounded-full cursor-pointer temp-btn__label"
            >
              <p className="z-20 cel">
                C<span className="absolute -top-1 ">&deg;</span>
              </p>
              <p className="far">
                F<span className="absolute -top-1 ">&deg;</span>
              </p>
            </label>
          </div> */}
        </div>
      </div>

      {/* Desktop Header */}
      <div className="items-center justify-between hidden h-full xs:flex ">
        <p className="text-base font-bold text-center ">{dateString}</p>
        <div className="flex gap-5 ">
          <Search />
          {/* <div className="dark-mod-btn">
            <input
              className="hidden w-0 h-0 darkmod-btn"
              type="checkbox"
              id="darkmod-toggle"
            />

            <label
              htmlFor="darkmod-toggle"
              className="relative block w-[88px] h-10 bg-white rounded-full cursor-pointer toggle-shadow shadow"
            >
              <svg
                className="sun"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
                  fill="#1C274C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM4.39861 4.39861C4.6915 4.10572 5.16638 4.10572 5.45927 4.39861L5.85211 4.79145C6.145 5.08434 6.145 5.55921 5.85211 5.85211C5.55921 6.145 5.08434 6.145 4.79145 5.85211L4.39861 5.45927C4.10572 5.16638 4.10572 4.6915 4.39861 4.39861ZM19.6011 4.39887C19.894 4.69176 19.894 5.16664 19.6011 5.45953L19.2083 5.85237C18.9154 6.14526 18.4405 6.14526 18.1476 5.85237C17.8547 5.55947 17.8547 5.0846 18.1476 4.79171L18.5405 4.39887C18.8334 4.10598 19.3082 4.10598 19.6011 4.39887ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM18.1476 18.1476C18.4405 17.8547 18.9154 17.8547 19.2083 18.1476L19.6011 18.5405C19.894 18.8334 19.894 19.3082 19.6011 19.6011C19.3082 19.894 18.8334 19.894 18.5405 19.6011L18.1476 19.2083C17.8547 18.9154 17.8547 18.4405 18.1476 18.1476ZM5.85211 18.1479C6.145 18.4408 6.145 18.9157 5.85211 19.2086L5.45927 19.6014C5.16638 19.8943 4.6915 19.8943 4.39861 19.6014C4.10572 19.3085 4.10572 18.8336 4.39861 18.5407L4.79145 18.1479C5.08434 17.855 5.55921 17.855 5.85211 18.1479ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
                  fill="#1C274C"
                />
              </svg>

              <svg
                className="moon"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#1C274C"
                />
              </svg>
            </label>
          </div> */}
          <div className="temp-btn">
            <input
              type="checkbox"
              id="temp-input"
              className="hidden w-0 h-0 temp-btn__input"
              onChange={tempUnitChangeHandler}
            />
            <label
              htmlFor="temp-input"
              className="relative block w-[88px] h-10 bg-white shadow rounded-full cursor-pointer temp-btn__label"
            >
              <p className="cel">
                C<span className="absolute -top-1 ">&deg;</span>
              </p>
              <p className="far">
                F<span className="absolute -top-1 ">&deg;</span>
              </p>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
