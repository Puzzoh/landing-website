import React from "react";
import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const BusinessNavbar: React.FC = () => {
  return (
    <div className="navbar text-primary bg-opacity-0 backdrop-blur-[1px]">
      <div className="navbar-start">
        <Link href=".">
          <div className="btn btn-ghost normal-case text-xl font-LexendMega">
            Puzzoh
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <div className="flex space-x-2">
          <Link href="#">
            <button className="btn rounded-full bg-white hover:bg-white border-none">
              <IoLogoInstagram className="text-black text-3xl hover:text-primary" />
            </button>
          </Link>
          <Link href="#">
            <button className="btn rounded-3xl bg-white hover:bg-white border-none">
              <IoLogoLinkedin className="text-black text-3xl hover:text-primary" />
            </button>
          </Link>
          <Link href="https://github.com/Puzzoh">
            <button className="btn rounded-3xl bg-white hover:bg-white border-none">
              <IoLogoGithub className="text-black text-3xl hover:text-primary" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessNavbar;
