import Link from "next/link";
import Image from "next/image";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer
      className="flex flex-col text-white mt-5 border-t border-gray-100 bg-gray-700"
      id="footer"
    >
      <div
        className="flex max-md:flex-col flex-wrap justify-between
         gap-5 sm:px-16 px-6 py-10"
      >
        <div className="flex flex-col justify-normal items-start gap-6 -translate-y-3">
          <div className="flex flex-row justify-center items-center">
            <h1 className="font-bold text-2xl text-white">Four -</h1>
            <Image
              src="/logo-white.png"
              alt="logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <h1 className="font-bold text-2xl text-white">heeliam</h1>
          </div>
          <p className="text-base font-semibold">
            Four-Wheeliam 2023
            <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-400 font-bold hover:scale-110"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="sm:px-16 px-6 py-10 text-base font-semibold">Terms of use</p>
    </footer>
  );
};

export default Footer;
