import BulletPoint from "../../../../components/bulletPoint/BulletPoint";
import CTA from "../../../../components/cta/CTA";
import RedText from "../../../../components/redText/RedText";
import { IconContext } from "react-icons";
import { bulletsData } from "./data";

const Bullets = () => {
  return (
    <div
      className="h-screen bg-light-bluish-gray
    bg-bulletsBgFaded bg-cover bg-center p-10
    lg:bg-bulletsBg lg:bg-contain lg:bg-right lg:bg-no-repeat"
    >
      <div className="flex h-full flex-col items-center justify-between">
        <h1
          className="w-80 self-center text-center font-anton text-6xl uppercase text-black
          md:w-116 lg:self-start lg:text-left"
        >
          get the best <RedText>skating</RedText> exprience
        </h1>

        <div className="flex flex-col justify-between md:flex-row lg:self-start">
          <IconContext.Provider value={{ color: "black", size: "3em" }}>
            {bulletsData.map((bullet, idx) => (
              <BulletPoint title={bullet.title} icon={bullet.icon} key={idx} />
            ))}
          </IconContext.Provider>
        </div>
        <CTA type="primary" path="./shop" rounded>
          shop now
        </CTA>
      </div>
    </div>
  );
};

export default Bullets;
