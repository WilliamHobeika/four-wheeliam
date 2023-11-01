"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { CustomButton } from ".";

const Hero = () => {
  const router = useRouter();
  const handleScroll = () => {
    router.push("#car-catalogue");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-24 padding-x">
        <h1 className="hero__title">Find, Book or Rent a car ___ quickly and easily!</h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking experience
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-red text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.jpg" fill alt="hero-car" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
