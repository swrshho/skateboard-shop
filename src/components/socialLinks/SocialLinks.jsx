import SocialBTN from "../socialBTN/SocialBTN";
import { socialLinksData } from "./data";

const SocialLinks = ({ className }) => {
  return (
    <div
      className={`${className} flex w-full max-w-215px items-center justify-between`}
    >
      {socialLinksData.map((socialLink, idx) => (
        <SocialBTN icon={socialLink.icon} path={socialLink.link} key={idx} />
      ))}
    </div>
  );
};

export default SocialLinks;
