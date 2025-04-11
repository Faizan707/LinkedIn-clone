"use client";

import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import BusinessOptions from "./BusinessOptions";

function BusinessButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="relative">
      <div
        className="hidden  md:flex items-center flex-col group cursor-pointer border-l border-gray-300 pl-3 hover:text-black"
        onClick={handleToggle}
      >
        <TfiLayoutGrid3 className="text-gray-500 group-hover:text-black" />
        <div className="flex items-center">
          <p className="text-[10px] text-gray-500 group-hover:text-black">For Business</p>
          <MdOutlineArrowDropDown className="text-gray-500 group-hover:text-black" />
        </div>
      </div>
      {isToggled && <BusinessOptions />}
    </div>
  );
}

export default BusinessButton;