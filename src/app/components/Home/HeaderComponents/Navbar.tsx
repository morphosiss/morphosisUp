"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import scrollToElement from "./ScrollToElement";

const Navbar: React.FC<{
  setShowMenu: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setShowMenu }) => {
  const [scrollY, setScrollY] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrollY(true);
      } else {
        setScrollY(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <nav
      className={`flex transition-all ${
        scrollY && "bg-[rgba(103,105,206,0.08)]  backdrop-blur-2xl"
      } py-4 fixed top-0 left-0 right-0 items-center z-50 justify-between pot:px-0 px-5 pot:justify-around w-full`}
    >
      <div>
        <Link href={"/"} className="flex items-center gap-1">
          <svg
            className="text-indigo-600 size-8"
            viewBox="0 0 92 139"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 33V105.5L29.5 135V64.5H64.5V105.5L92 138.5V59.5L37.5 0V33H0Z"
              fill="currentColor"
            />
          </svg>
          <span className="pot:text-2xl text-xl font-medium text-indigo-600">
            morphosis Up
          </span>
        </Link>
      </div>
      <div className="pot:flex hidden items-center gap-16">
        <button
          onClick={() => scrollToElement("init", -20)}
          className="text-zinc-800 text-[16px] cursor-pointer font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Início
        </button>
        <button
          onClick={() => scrollToElement("banner", -20)}
          className="text-zinc-800 text-[15px] cursor-pointer font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Start Up
        </button>
        <button
          onClick={() => scrollToElement("projects", -150)}
          className="text-zinc-800 text-[15px] cursor-pointer font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Projectos
        </button>
        <button
          onClick={() => scrollToElement("services", -60)}
          className="text-zinc-800 text-[15px] cursor-pointer font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Serviços
        </button>
        <button
          onClick={() => scrollToElement("team", -150)}
          className="text-zinc-800 text-[15px] cursor-pointer font-medium transition-all hover:underline hover:text-indigo-600"
        >
          Team
        </button>
      </div>
      <div>
        <Link
          target="_blank"
          href={"mailto:startupmorphosis@gmail.com"}
          className="pot:flex hidden items-center gap-2 font-medium py-2 px-4 rounded-lg bg-indigo-500 text-white transition-all hover:bg-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon size-5 icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
            <path d="M12.5 15.5l2 2" />
            <path d="M15 13l2 2" />
          </svg>
          Contrate-nos
        </Link>
        <button
          onClick={() => setShowMenu("on")}
          className="text-indigo-600 pot:hidden inline-flex transition-all hover:text-indigo-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8l16 0" />
            <path d="M4 16l16 0" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
