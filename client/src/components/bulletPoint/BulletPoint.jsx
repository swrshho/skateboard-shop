const BulletPoint = ({ title, icon }) => {
  return (
    <div
      className="flex w-full max-w-xs items-center justify-start
      border-b py-5 font-poppins text-2xl font-bold
      capitalize text-black last-of-type:border-b-0 last-of-type:pb-0
      md:border-b-0 md:border-r md:py-0 md:px-5 md:first-of-type:pl-0 md:last-of-type:border-r-0 md:last-of-type:pr-0
      lg:flex-col lg:items-center lg:justify-center"
    >
      {icon}
      <p className="ml-4 w-fit text-center">{title}</p>
    </div>
  );
};

export default BulletPoint;
