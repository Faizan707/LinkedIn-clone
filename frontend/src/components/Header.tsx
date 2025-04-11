import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { NavItems } from "@/components/NavItems";
import { UserButton } from "@clerk/nextjs";
import BusinessButton from "./BusinessButton";
import MobileNavItems from "./MobileNavItems";

function Header() {
  return (
    <nav className="   bg-white shadow-md fixed top-0 left-0 right-0 z-50">
<div className="sm:ml-auto relative flex items-center justify-between max-w-[1000px] mx-auto p-2 gap-4 md:gap-10">        {/* Left Section: LinkedIn Icon */}
        <div className="flex items-center">
          <FaLinkedin
            className="text-[#0077B5]"
            size={40}
            aria-label="LinkedIn"
          />
        </div>

        {/* Center Section: Search Bar (Hidden on Mobile) */}
        <div className="hidden lg:flex flex-1 max-w-64 relative mx-2">
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-1 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black text-gray-700 placeholder-gray-500 text-sm"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        
        <div className=" hidden md:flex items-center lg:hidden ">
          <CiSearch
          className="text-gray-500  rounded-md flex items-center "
            size={25}
          />
          </div>

        {/* Right Section: Navigation and User Actions */}
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItems />
          </div>

          <div className="flex items-center md:hidden ">
          <CiSearch
          className="text-gray-500  rounded-md flex items-center "
            size={25}
          />
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavItems />
          </div>

          {/* User Button (Desktop Only) */}
          <div className="hidden md:block">
            <UserButton />
          </div>

          {/* Business Button (Desktop Only) */}
          <div className="hidden md:block">
            <BusinessButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;