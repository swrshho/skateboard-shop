import { Link } from "react-router-dom";

const CTA = ({
  children,
  type = "primary" || "secondry",
  rounded,
  path,
  className,
}) => {
  const roundCheck = () => {
    if (rounded) {
      return "rounded-md";
    }
  };

  const typeChecker = () => {
    switch (type) {
      case "primary":
        return "bg-red text-light-bluish-gray  hover:bg-light-bluish-gray hover:text-black";

      case "secondry":
        return "bg-light-bluish-gray text-black hover:bg-red hover:text-light-bluish-gray";

      default:
        return "bg-red text-light-bluish-gray  hover:bg-light-bluish-gray hover:text-black";
    }
  };

  return (
    <Link
      to={path}
      className={`all border-2 border-red px-1.5 py-2 font-poppins text-xl font-medium uppercase transition
      ${roundCheck()}
      ${typeChecker()}
			${className}`}
    >
      {children}
    </Link>
  );
};

export default CTA;
