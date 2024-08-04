import React, { useState } from "react";
import { Link } from "react-router-dom";
const VNavbar = (props) => {
  let { show } = props;
  return (
    <div
      className={`nav-items flex w-40 shadow-sm shadow-black ml-auto mr-4 transition-all z-50 duration-500 ease-in-out bg-purple-600 ${
        show ? "-translate-x-0" : "ssm:translate-x-48 sssm:translate-x-48"
      }`}
    >
      <ul className="flex flex-col items-center justify-center w-full p-4 gap-y-5">
        <Link to={"/"}>
          <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
            Home
          </li>
        </Link>
        <Link to={"/about"}>
          {" "}
          <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
            About
          </li>
        </Link>
        <Link to={"/contact"}>
          {" "}
          <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
            Contacts
          </li>
        </Link>

        <Link to={"/AllNotes"}>
          {" "}
          <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
            Notes
          </li>
        </Link>
        <Link to={"/help"}>
          {" "}
          <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
            Help
          </li>
        </Link>
        <Link to={"/links"}>
          {" "}
          <li className=" text-white cursor-pointer text-[16px] lg:text-[16px] smd:text-[14px] md:text-[13px] md:text-white ">
            Links
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default VNavbar;
