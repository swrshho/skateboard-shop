import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { useState } from "react";

const NavBtn = ({ path, title, icon, color }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="font-regular flex items-center justify-between rounded-md bg-light-bluish-gray
								 px-2 py-1 text-xl uppercase text-black transition-all hover:bg-black hover:text-light-bluish-gray"
      to={path}
    >
      <IconContext.Provider
        value={{ color: hover ? "white" : color, size: "1em" }}
      >
        {icon}
        {title}
      </IconContext.Provider>
    </Link>
  );
};

export default NavBtn;
