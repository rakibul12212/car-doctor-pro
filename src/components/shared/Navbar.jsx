"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCartOutline, IoSearchSharp, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contacts", path: "/contacts" },
  ];
  const session = useSession();
  return (
    <div className="bg-base-100 text-slate-900 ">
      <div className="navbar container mx-auto flex items-center justify-between py-4 px-6">
        {/* Navbar Start */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src="/assets/logo.svg" alt="logo" height={60} width={100} />
          </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl focus:outline-none "
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {/* Navbar Center (Links) */}
        <div
          className={`absolute lg:static top-24 left-0 py-8 w-full lg:w-auto bg-base-100 lg:bg-transparent lg:flex lg:items-center lg:space-x-6 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="font-semibold hover:text-primary duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Navbar End */}
        <div className="hidden lg:flex space-x-3 items-center">
          <IoCartOutline className="text-xl" />
          <IoSearchSharp className="text-xl" />
          <a className="btn btn-outline btn-primary px-8">Appointment</a>
          {/* <Link href={"/login"} className="btn btn-primary px-8">
            Log In
          </Link> */}
          {!session.data ? (
            <Link href={"/login"} className="btn btn-primary px-8">
              Log In
            </Link>
          ) : (
            <button onClick={() => signOut()} className="btn btn-primary px-8">
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Mobile End Section */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4 space-y-3">
          <div className="flex space-x-3  items-center">
            <IoCartOutline className="text-xl" />
            <IoSearchSharp className="text-xl" />
            <a className="btn btn-outline btn-primary px-8">Appointment</a>
            <a className="btn btn-outline btn-primary px-8">Log In</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
