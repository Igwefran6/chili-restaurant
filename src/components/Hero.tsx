import React from "react";
import CTAButton from "./CTAButton";

const Hero: React.FC = () => {
  return (
    <div className="w-screen lg:h-[80vh] bg-gradient-to-r from-brand to-brand-dark flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex flex-col justify-center px-16 py-16 lg:py-0 gap-4">
        <h1 className="protest-riot-regular text-accent-beige text-4xl">
          Hearty Food Restaurant
        </h1>
        <p className="poppins-regular text-accent-beige opacity-90 max-w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          veritatis non maiores facere quae at.
        </p>
        <CTAButton label="Order Now!" />
      </div>
      <div className="grid place-items-center pb-16 lg:py-0">
        <img className="" src="/images/food.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
