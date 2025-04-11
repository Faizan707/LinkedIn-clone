"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {navItems} from "../DesktopNavItems"


export const NavItems = () => {
  const pathname = usePathname();
  const [hoveredIem, setHoveredItem] = useState<string | null>(null);

  

  return (
    <div className="flex items-center space-x-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link 
            key={item.label} 
            href={item.href} 
            className="flex flex-col items-center cursor-pointer group"
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span 
              className={`
                ${isActive ? "text-black" : "text-gray-500"} 
                group-hover:text-black 
                transition-colors duration-200
              `}
            >
              {item.icon}
            </span>
            <span 
              className={`
                text-sm 
                ${isActive ? "text-black font-bold" : "text-gray-500"} 
                group-hover:text-black 
                transition-colors duration-200
              `}
            >
              {item.label}
            </span>
            {isActive && <div className="w-8 h-1 bg-black mt-1 rounded-full"></div>}
          </Link>
        );
      })}
    </div>
  );
};