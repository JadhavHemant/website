
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import img1 from "../ProfileCom/ImageLogo/Company_Logo.png";
export const ProfileCom = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <>
      <header className="sticky top-0 ">
        <nav>
          <div className="mx-auto w-max-auto bg-black">
            <div className="flex justify-between mx-auto ">
              <div className="flex items-center justify-between my-2 lg:justify-end gap-[40px] ">
                <Link to="/">
                  <div className="pl-[120px]">
                    <img src={img1} alt="Logo" className="h-[60px] w-[180px]" />
                  </div>
                </Link>
              </div>
              <div className="flex gap-[30px] ">
                <div className="hidden lg:flex gap-10 items-center justify-between my-2 pr-[120px] lg:text-[20px] leading-snug font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600">
                  <Link to="" onClick={handleLinkClick}>
                  Home
                  </Link>
                  <Link to="Aboutus" onClick={handleLinkClick}>
                    About Us
                  </Link>
                  <Link to="Product" onClick={handleLinkClick}>
                    Producs
                  </Link>
                  <Link to="Contactus" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </div>
                <div className="flex items-center lg:hidden">
                  <button onClick={handleToggleMenu}>
                    <Bars3Icon className="h-7 pr-[15px] text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`fixed z-40 w-full  bg-black overflow-hidden flex flex-col lg:hidden gap-12 ${
              toggleMenu ? "h-auto" : "h-0"
            }`}
          >
            <div className="px-8 text-center lg:text-[20px] leading-snug font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-600">
              <div className="flex flex-col gap-8  overflow-visible tracking-wider pt-4 pb-4">
                <Link to="" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link to="Aboutus" onClick={handleLinkClick}>
                    About Us
                  </Link>
                  <Link to="Product" onClick={handleLinkClick}>
                    Producs
                  </Link>
                  <Link to="Contactus" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
              </div>
            </div>
          </div>
        </nav>
        <hr className="border border-[gray]" />
        <div></div>
      </header>
      <div onClick={handleLinkClick}>
        <Outlet />
      </div>
    </>
  );
};
