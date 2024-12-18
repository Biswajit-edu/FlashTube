import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center logoText text-2xl font-semibold whitespace-nowrap dark:text-white">
            FlashTube
          </span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;