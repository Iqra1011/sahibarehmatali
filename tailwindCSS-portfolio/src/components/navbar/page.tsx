"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="header-container fixed top-0 right-0 w-full h-[70px] bg-transparent z-10">
        <div className="header-content grid grid-cols-2 justify-between items-center px-4 py-4 sm:px-6">
          <div className="logo text-white text-xl sm:text-2xl">
            Sahiba <span className="text-#7ed592">REHMAT</span>
          </div>
          <div className="nav-links flex justify-end items-center gap-3 sm:gap-10 font-serif text-sm sm:text-lg mr-3 sm:mr-24">
            <Link href="#about-sec" className="nav-link text-white transition-colors duration-300 hover:text-blue-500">
              About
            </Link>
            <Link href="#skills" className="nav-link text-white transition-colors duration-300 hover:text-blue-500">
              Skills
            </Link>
            <Link href="#Contact" className="nav-link text-white transition-colors duration-300 hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
