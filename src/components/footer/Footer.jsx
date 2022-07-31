import { Link } from "react-router-dom";
import CTA from "../../components/cta/CTA";
import SocialLinks from "../socialLinks/SocialLinks";
import { footerNavData } from "./data";
import Logo from "../../assets/logo/Logo";

const Footer = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-between bg-velvet-red p-10 pb-2 font-poppins sm:h-512px">
      <h1 className="min-w-450px max-w-512px text-center font-anton text-6xl uppercase text-white">
        get the latest news about us
      </h1>

      <div className="flex w-4/5 max-w-330px flex-col items-center justify-between sm:max-w-512px">
        <form className="sm:flex">
          <input
            className="h-12 w-full rounded-md p-2 text-black sm:rounded-r-none"
            type="email"
            placeholder="Your E-mail Address..."
          />
          <CTA
            className="hidden rounded-l-none sm:inline-block"
            type="primary"
            path="./shop"
            rounded
          >
            submit
          </CTA>
        </form>

        <CTA
          className="mt-2 w-full text-center sm:hidden"
          type="primary"
          path="./shop"
          rounded
        >
          submit
        </CTA>
      </div>

      <div className="sm:min-w-92 sm:max-w-sm">
        <ul
          className="flex h-full w-full flex-col items-center justify-around
						font-poppins text-xl capitalize text-white
						sm:flex-row"
        >
          {footerNavData.map((link, idx) => (
            <li className="mb-3 last:mb-0 sm:m-0" key={idx}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <SocialLinks className="sm:hidden" />

      <div className="flex w-full flex-col items-center justify-between">
        <span className="mb-4 inline-block h-px w-full bg-white" />
        <div className="flex w-11/12 flex-col items-center justify-between sm:flex-row">
          <Logo />
          <p className="text-center font-poppins capitalize text-white">
            © all rights reserved
          </p>
          <SocialLinks className="hidden sm:flex" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
