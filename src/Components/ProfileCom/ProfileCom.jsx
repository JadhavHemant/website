
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

export const ProfileCom = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // Function to handle toggling the menu
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <>
      <header className="sticky top-0">
        <nav>
          <div className="mx-auto backdrop-blur-[4px] w-max-auto">
            <div className="flex justify-between mx-auto p-2">
              <div className="flex items-center justify-between my-2 lg:justify-end gap-[40px] ">
                <Link to="/">
                  <div className="pl-4">
                    {/* <img src={logo} alt="Logo" className="h-[50px] w-[180px]" /> */}
                    <h1 className="text-3xl font-extrabold">
                      𝓱𝓮𝓶𝓪𝓷𝓽
                    </h1>
                  </div>
                </Link>
              </div>
              <div className="flex gap-6 font-bold">
                <div className="hidden lg:flex gap-10 items-center justify-between my-2 pr-4 lg:text-[16px] text-cyan-50">
                  <Link to="" onClick={handleLinkClick}>
                  Home
                  </Link>
                  <Link to="about" onClick={handleLinkClick}>
                    About Me
                  </Link>
                  <Link to="skills" onClick={handleLinkClick}>
                    Skills
                  </Link>
                  <Link to="project" onClick={handleLinkClick}>
                    Contact Me
                  </Link>
                </div>
                <div className="flex items-center lg:hidden">
                  <button onClick={handleToggleMenu}>
                    <Bars3Icon className="h-7 pr-[15px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`fixed z-40 w-full bg-white/30 backdrop-blur-sm overflow-hidden flex flex-col lg:hidden gap-12 ${
              toggleMenu ? "h-auto" : "h-0"
            }`}
          >
            <div className="px-8 text-center">
              <div className="flex flex-col gap-8 font-bold overflow-visible tracking-wider pt-4 pb-4">
                <Link to="" onClick={handleLinkClick}>
                  Home
                </Link>
                <Link to="about" onClick={handleLinkClick}>
                  About Me
                </Link>
                <Link to="skills" onClick={handleLinkClick}>
                  Skills
                </Link>
                <Link to="project" onClick={handleLinkClick}>
                  Contact Me
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
