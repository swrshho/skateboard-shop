import CTA from "../cta/CTA";

const ProductCard = ({ name, price, image }) => {
  return (
    <div
      className={`flex h-40 max-h-420px w-5/6 max-w-xs flex-col items-center justify-end rounded-xLarge bg-light-bluish-gray
       last:rounded-b-none md:h-full md:w-64 md:rounded-b-none`}
    >
      <div className="flex h-16 items-center justify-center md:h-full">
        <img
          className="w-2/5 rotate-90 sm:w-5/12 md:w-10/12 md:rotate-0"
          src={image}
          alt={name}
        />
      </div>
      <h3 className="font-poppins text-base font-medium uppercase text-black md:text-lg">
        {name}
      </h3>
      <span className="font-poppins text-base font-medium text-dark-blue md:text-lg">
        ${price}
      </span>
      <CTA className="py-1 text-sm md:text-base" type="primary" path="/shop">
        add to cart
      </CTA>
    </div>
  );
};

export default ProductCard;
