import logo from "../../assets/logo.svg";
import hamburger from "../../assets/hamburger.svg";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-end h-10 px-4">
        {/* <img className="h-3" src={logo} alt="climafore logo" /> */}
        <img className="h-3 " src={hamburger} alt="hamburger icon" />
      </div>
    </header>
  );
}

export default Header;
