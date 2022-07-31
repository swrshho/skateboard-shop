import { Link } from "react-router-dom";
import logo from "./../images/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="z-10 flex items-center">
      <img
        className="h-9 w-11 sm:h-14 sm:w-16"
        src={logo}
        alt="Rolling Wheels"
      />
      <h1 className="fotnt-poppins text-xl font-bold text-white sm:text-2xl">
        ROLLING WHEELS
      </h1>
    </Link>
  );
};

export default Logo;
