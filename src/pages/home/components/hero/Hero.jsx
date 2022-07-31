import RedTextShadow from "../../../../components/redTextShadow/RedTextShadow";
import CTA from "../../../../components/cta/CTA";
const Hero = () => {
  return (
    <div className="flex h-screen flex-col bg-heroBg bg-cover bg-center md:h-512px">
      <div className="mt-11 flex h-full w-full items-center justify-center md:w-5/12">
        <p className="h-fit max-w-261px font-anton text-6xl uppercase text-white">
          roll along with <RedTextShadow>your</RedTextShadow> desire
        </p>
      </div>
      <div className="mb-10 flex w-full items-center justify-center">
        <CTA path="/shop" type="primary" rounded>
          discover your taste
        </CTA>
      </div>
    </div>
  );
};

export default Hero;
