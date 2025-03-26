"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();
  const [hoveredIem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          width="24"
          height="24"
          style={{
            width: "24px",
            minWidth: "24px",
            height: "24px",
            minHeight: "24px",
          }}
          focusable="false"
        >
          <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
        </svg>
      ),
      label: "Home",
      href: "/feed",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          data-supported-dps="24x24"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{
            width: "24px",
            minWidth: "24px",
            height: "24px",
            minHeight: "24px",
          }}
        >
          <path d="M12 6.5a4.5 4.5 0 1 1 4.5 4.5A4.49 4.49 0 0 1 12 6.5m6 6.5h-3a3 3 0 0 0-3 3v6h9v-6a3 3 0 0 0-3-3M6.5 6A3.5 3.5 0 1 0 10 9.5 3.5 3.5 0 0 0 6.5 6m1 9h-2A2.5 2.5 0 0 0 3 17.5V22h7v-4.5A2.5 2.5 0 0 0 7.5 15"></path>
        </svg>
      ),
      label: "My Network",
      href: "/network",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          data-supported-dps="24x24"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{
            width: "24px",
            minWidth: "24px",
            height: "24px",
            minHeight: "24px",
          }}
        >
          <path d="M17 6V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1H2v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6zM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm10 9a4 4 0 0 0 3-1.38V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4.38A4 4 0 0 0 5 14z"></path>
        </svg>
      ),
      label: "Jobs",
      href: "/jobs",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          data-supported-dps="24x24"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style={{
            width: "24px",
            minWidth: "24px",
            height: "24px",
            minHeight: "24px",
          }}
        >
          <path d="M16 4H8a7 7 0 0 0 0 14h4v4l8.16-5.39A6.78 6.78 0 0 0 23 11a7 7 0 0 0-7-7m-8 8.25A1.25 1.25 0 1 1 9.25 11 1.25 1.25 0 0 1 8 12.25m4 0A1.25 1.25 0 1 1 13.25 11 1.25 1.25 0 0 1 12 12.25m4 0A1.25 1.25 0 1 1 17.25 11 1.25 1.25 0 0 1 16 12.25"></path>
        </svg>
      ),
      label: "Messages",
      href: "/messages",
    },
    {
      icon: (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            data-supported-dps="24x24"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style={{
              width: "24px",
              minWidth: "24px",
              height: "24px",
              minHeight: "24px",
            }}
          >
            <path d="M22 19h-8.28a2 2 0 1 1-3.44 0H2v-1a4.52 4.52 0 0 1 1.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0 1 22 18zM18.21 7.44A6.27 6.27 0 0 0 12 2a6.27 6.27 0 0 0-6.21 5.44L5 13h14z"></path>
          </svg>
        </span>
      ),
      label: "Notifications",
      href: "/notifications",
    },
  ];

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