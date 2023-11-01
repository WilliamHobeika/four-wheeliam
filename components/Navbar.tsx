"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CustomButton } from ".";

const Navbar = () => {
  const router = useRouter();

  const handleScroll = () => {
    router.push("#footer");
  };

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <h1 className="font-bold text-xl text-gray-700">Four -</h1>
          <Image
            src="/logo-black.png"
            alt="logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <h1 className="font-bold text-xl text-gray-700">heeliam</h1>
        </Link>

        <CustomButton
          title="Contact"
          btnType="button"
          containerStyles="text-white font-bold rounded-full bg-gray-700 max-sm:min-w-[80px] min-w-[130px]"
          handleClick={handleScroll}
        />
      </nav>
    </header>
  );
};

export default Navbar;
