'use client';
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { IoHome, IoSearch } from 'react-icons/io5';
import { BsFillPeopleFill, BsSuitcaseLgFill } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';
import { IoMdArrowDropdown } from 'react-icons/io';

type DecodedTokenType = {
  id: string;
  email: string;
  name: string;
  avatar: string;
  iat: number;
  exp: number;
};

function Navbar() {
  const pathname = usePathname();
  const [decodedToken, setDecodedToken] = useState<DecodedTokenType | null>(
    null
  );

  const getToken = () => {
    const token = getCookie('token') as string | undefined;

    if (token) {
      const decoded = jwtDecode<DecodedTokenType & { avatar: any }>(token);

      setDecodedToken(decoded);
    } else {
      console.warn('Token not found in cookies.');
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <nav className="border-b border-gray-200 bg-white py-2 shadow-sm">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="#0A66C2"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <div className="relative">
            <IoSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500" />
            <Input
              type="text"
              placeholder="Search"
              className="w-[280px] rounded-full border-none bg-gray-100 py-2 pr-4 pl-10 transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="group flex flex-col items-center">
            <Link href="/feeds" className="flex flex-col items-center">
              <IoHome
                className={`h-6 w-6 ${
                  pathname === '/feeds' ? 'text-gray-800' : 'text-gray-500'
                } transition-colors group-hover:text-gray-800`}
              />
              <span
                className={`text-sm ${
                  pathname === '/feeds'
                    ? 'font-semibold text-gray-800'
                    : 'text-gray-500'
                } transition-colors group-hover:text-gray-800`}
              >
                Home
              </span>
            </Link>
            {pathname === '/feeds' && (
              <div className="mt-1 h-0.5 w-6 rounded-full bg-black"></div>
            )}
          </div>
          <div className="group flex flex-col items-center">
            <Link href="/my-network" className="flex flex-col items-center">
              <BsFillPeopleFill
                className={`h-6 w-6 ${
                  pathname === '/my-network' ? 'text-gray-800' : 'text-gray-500'
                } transition-colors group-hover:text-gray-800`}
              />
              <span
                className={`text-sm ${
                  pathname === '/my-network'
                    ? 'font-semibold text-gray-800'
                    : 'text-gray-500'
                } transition-colors group-hover:text-gray-800`}
              >
                My Network
              </span>
            </Link>
            {pathname === '/my-network' && (
              <div className="mt-1 h-0.5 w-6 rounded-full bg-black"></div>
            )}
          </div>
          <div className="group flex flex-col items-center">
            <Link href="/jobs" className="flex flex-col items-center">
              <BsSuitcaseLgFill
                className={`h-6 w-6 ${
                  pathname === '/jobs' ? 'text-gray-800' : 'text-gray-500'
                } transition-colors group-hover:text-gray-800`}
              />
              <span
                className={`text-sm ${
                  pathname === '/jobs'
                    ? 'font-semibold text-gray-800'
                    : 'text-gray-500'
                } transition-colors group-hover:text-gray-800`}
              >
                Jobs
              </span>
            </Link>
            {pathname === '/jobs' && (
              <div className="mt-1 h-0.5 w-6 rounded-full bg-black"></div>
            )}
          </div>
          <div className="flex flex-col items-center">
            {decodedToken?.avatar ? (
              <Image
                src={decodedToken.avatar}
                alt={`${decodedToken.name}'s avatar`}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 font-semibold text-white">
                {decodedToken?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
            )}
            <p className="flex items-center text-sm text-gray-400 hover:cursor-pointer">
              Me <IoMdArrowDropdown />
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
