import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { NavItems } from "@/NavItems";
import { UserButton } from "@clerk/nextjs";

function Header() {


  return (
    <nav className="bg-white  shadow-md">
      <div className="relative flex items-center max-w-[1000px] mx-auto p-2 gap-10">
        {/* LinkedIn Icon */}
        <FaLinkedin className="text-[#0077B5] mr-3" size={40} aria-label="LinkedIn" />

        {/* Search Bar */}
        <div className="relative w-64">
          <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            className="pl-10 pr-30 py-1 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black text-gray-700 placeholder-gray-500 w-full"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center ml-auto space-x-6">
         <NavItems/>
        </div>
        <div className=" ">
            <UserButton/>
        </div>
      </div>
    </nav>
  );
}

export default Header;
