import hamburger from "../../../assets/hamburger.svg";
import Location from "./Location";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-end h-12 px-3">
        {/* <img className="h-3" src={logo} alt="climafore logo" /> */}
        <img className="h-3 " src={hamburger} alt="hamburger icon" />
      </div>
      <Location />
    </header>
  );
}

export default Header;
