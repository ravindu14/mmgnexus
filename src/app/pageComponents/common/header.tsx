"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Nav from "./nav";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky flex justify-between items-center px-6 md:px-10 w-full z-50  h-24 shadow-md ${
        pathname === "/" ? "bg-white/40 backdrop-blur-md" : "bg-gray-50"
      } `}
    >
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className={`${isHome ? "text-white" : "text-black"} text-2xl`}
        >
          <FiMenu />
        </button>
      </div>
      <div className="flex items-center space-x-2 grow ml-4 justify-between md:grow-0 md:ml-0">
        <Image
          className="hidden md:block"
          src={Logo}
          alt="Company Logo"
          width={75}
          height={75}
        />
        <span
          className={`font-bold text-3xl ${
            pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          NEXUS
        </span>
        <Image
          className={`md:hidden ${isOpen && "hidden"}`}
          src={Logo}
          alt="Company Logo"
          width={75}
          height={75}
        />
      </div>
      <div className="space-x-6">
        <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
