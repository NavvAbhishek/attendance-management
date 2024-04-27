import React from "react";
import Image from "next/image";
import logo from "../../public/Logo-RmBg.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-4 bg-dark-blue sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Image
              src={logo}
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-light-yellow hover:text-dark-yellow">
                <li>
                  <a href="/dashboard" >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-light-yellow hover:text-dark-yellow">
                <li>
                  <a
                    href="/profile"            
                  >
                    Profile
                  </a>
                </li>               
              </ul>
            </div>
            <div>
              <ul className="text-light-yellow hover:text-dark-yellow">
                <li>
                  <a href="/privacy-policy" >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline ">
              Attendix™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <FaFacebook className="w-[20px] h-[20px] text-white hover:text-dark-yellow cursor-pointer"/>
            <FaInstagram className="w-[20px] h-[20px] text-white hover:text-dark-yellow cursor-pointer"/>
            <FaTwitter className="w-[20px] h-[20px] text-white hover:text-dark-yellow cursor-pointer"/>
            <FaPinterest className="w-[20px] h-[20px] text-white hover:text-dark-yellow cursor-pointer"/>
            <FaTiktok className="w-[20px] h-[20px] text-white hover:text-dark-yellow cursor-pointer"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
