"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about us",
    path: "/about-us",
  },
  {
    name: "our projects",
    path: "/projects",
  },
  {
    name: "contact us",
    path: "/contact-us",
  },
];

type Props = {
  isOpen: boolean;
  toggleMenu: Function;
};

const Nav = ({ isOpen, toggleMenu }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden md:flex gap-8">
        {links.map(({ name, path }) => {
          return (
            <Link
              href={path}
              key={name}
              className={`${
                pathname === path && "text-accent border-b-2 border-accent"
              } capitalize hover:text-accent transition-all ${
                pathname === "/" ? "text-white" : "text-black"
              } font-medium`}
            >
              {name}
            </Link>
          );
        })}
      </nav>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed bg-white  w-2/3 h-screen top-0 left-0 z-[60] shadow-2xl md:hidden transform transition-transform duration-300`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <Link
            href="/"
            onClick={() => toggleMenu()}
            className="flex items-center space-x-2"
          >
            <Image src={Logo} alt="Company Logo" width={100} height={100} />
          </Link>
          <button
            onClick={() => toggleMenu()}
            className="text-2xl text-gray-700 hover:text-accent transition-colors"
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col px-6 pt-6 space-y-6 text-lg font-medium">
          {links.map(({ name, path }) => (
            <Link
              href={path}
              key={name}
              onClick={() => toggleMenu()}
              className={`capitalize transition-colors duration-200 ${
                pathname === path
                  ? "text-accent"
                  : "text-gray-800 hover:text-accent"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => toggleMenu()}
          className="fixed w-screen h-screen bg-black opacity-40 z-50 top-0 left-0 "
        />
      )}
    </>
  );
};

export default Nav;
