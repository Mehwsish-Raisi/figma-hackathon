"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      {/* Navbar 1 start */}
      <div className="bg-col1 h-auto md:h-[36px]">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 pt-1 space-y-2 sm:space-y-0">
          {/* Logo Section */}
          <div>
            <Image src="/images/logo1.png" alt="logo1" width={24} height={24} />
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <div className="flex items-center gap-2">
              <span className="text-[10px] hover:underline sm:text-[11px] font-medium">
               
                Find a Store
                
              </span>
              <div className="w-[1px] h-[12px] bg-black"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] hover:underline sm:text-[11px] font-medium">
                Help
              </span>
              <div className="w-[1px] h-[12px] bg-black"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] hover:underline sm:text-[11px] font-medium">
                <Link href='#'>
                Join Us
                </Link>
              </span>
              <div className="w-[1px] h-[12px] bg-black"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] hover:underline sm:text-[11px] font-medium">
               <Link href='/SignIn'>
                Sign In
                </Link>
              </span>
              <div className="w-[1px] h-[12px] bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar 1 end */}

      {/* Navbar 2 start */}

      <div className="pl-6">
        <div className=" bg-white w-full lg:w-[1440px] flex h-[60px] justify-between items-center">
          <Image
            src="/images/logo2.png"
            alt="logo"
            width={78.47}
            height={78.47}
          />

          <nav className="hidden lg:flex items-center justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              New & Featured
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Men
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Women
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Kids
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              SNKRS
            </Link>
          </nav>

          <div className=" flex">
            <div className="lg:flex hidden  bg-col1 gap-3 items-center w-[180px] h-[40px] rounded-[100px]">
              <div className="pl-2">
                <CiSearch className="w-[24px] h-[24px] " />
              </div>
              <p className="opacity-50 ">Search</p>
            </div>
            <div className="flex gap-2 pt-2">
              <Link href='/' className="hover:text-red-500">
              <CiHeart className="w-[24px] h-[24px] " />
              </Link>
              <Link href='/Cart'  className="hover:text-red-500">
              <IoBagOutline className="w-[24px] h-[24px] " />
              </Link>
            </div>
            <button
              className="lg:hidden lg:pr-0 pt-1 pl-4 block"
              onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
              <IoMenuOutline className="h-[24px] w-[24px] " />
            </button>
          </div>
        </div>
      </div>
      {/* Navbar 2 end */}
      {/* Toggle Menu for Mobile Screens */}
      <div
        className={`fixed top-0 left-0 h-1/2 w-[250px] bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:hidden`}
      >
        <div className="flex items-center justify-between px-[20px] py-[20px] border-b border-[#000000]">
          <Image
            src="/images/logo2.png"
            alt="logo"
            width={78.47}
            height={78.47}
          />
          <button onClick={() => setSidebarOpen(false)}>
            <IoMdClose size={30} />
          </button>
        </div>

        <ul className="mt-[20px] text-[16px] space-y-4 px-[20px]">
          <li>
            <Link href={"/"}>New & Featured</Link>
          </li>
          <li>
            <Link href={"/"}>Men</Link>
          </li>
          <li>
            <Link href={"/"}>Women</Link>
          </li>
          <li>
            <Link href={"/"}>Kids</Link>
          </li>
          <li>
            <Link href={"/"}>SNKRS</Link>
          </li>
        </ul>
      </div>

      {isSidebarOpen && <div onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
};

export default Navbar;
