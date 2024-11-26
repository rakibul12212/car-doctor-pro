import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#151515] text-white">
      <footer className="footer   p-10 container mx-auto ">
        <aside>
          <Link href={"/"}>
            <Image src="/assets/logo.svg" alt="logo" height={60} width={100} />
          </Link>
          <p>
            Edwin Diaz is a software and web <br /> technologies engineer, a
            life coach <br /> trainer who is also a serial .
          </p>
          <div className="flex items-center space-x-3 my-2">
            <div className="p-3 bg-slate-800 rounded-full hover:text-primary">
              <FaGoogle />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:text-primary">
              <FaTwitter />
            </div>
            <div className="p-3 bg-slate-800 rounded-full hover:text-primary">
              <FaInstagram />
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesibility</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
