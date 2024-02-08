"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { FaHome, FaHandsHelping, FaHouseUser } from "react-icons/fa";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { TbReportSearch, TbLogout2 } from "react-icons/tb";
import { IoSettings, IoCreateSharp } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const Icons = [
  {
    link: "/",
    iconName: FaHome,
    name: "Home",
  },
  {
    link: "/dashboard/create-class",
    iconName: IoCreateSharp,
    name: "Create Class",
  },
  {
    link: "/dashboard/classess",
    iconName: FaHouseUser,
    name: "Classes",
  },
  {
    link: "/dashboard/my-classes",
    iconName: FaHouseUser,
    name: "My Classes",
  },
  {
    link: "/dashboard/attendance-history",
    iconName: BsClipboard2DataFill,
    name: "Attendance History",
  },
  {
    link: "/profile",
    iconName: FaUserLarge,
    name: "Profile",
  },
];
const Sidebar = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      console.log("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const [sidebar, setSidebar] = useState(false);
  
  return (
    <div className="relative">
      <div className={`open-sidebar absolute transition duration-700 ease-in-out ${sidebar ? "-translate-x-full" : "translate-x-0"} sm:hidden`}>
        <div className="z-10 ml-10 mt-6">
          <RiMenu4Line
            onClick={()=> setSidebar(true)}
            className="w-10 h-10 p-2 bg-dark-blue rounded-lg text-dark-yellow cursor-pointer"
          />
        </div>
      </div>
      <div className={`sidebar absolute top-0 left-0 z-20 transition duration-700 ease-in-out sm:translate-x-0 ${sidebar ? "translate-x-0" : "-translate-x-full"}  bg-dark-blue w-fit h-screen `}>
        <div className="icons">
          <div className="close-sidebar block sm:hidden">
            <MdOutlineClose 
            onClick={()=> setSidebar(false)}
            className="w-8 h-8 text-dark-yellow absolute right-5 top-5 cursor-pointer" />
          </div>
          <div className="top-icons">
            <ul className="pt-14 text-dark-yellow">
              {Icons.map((icon, index) => (
                <li
                  key={index}
                  className="px-6 py-3 hover:bg-dark-yellow hover:text-dark-blue"
                >
                  <Link href={icon.link} className="flex">
                    {React.createElement(icon.iconName, {
                      className: "w-6 h-6",
                    })}
                    <span className="ml-3 text-md font-semibold">
                      {icon.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-icons flex items-center justify-center absolute bottom-0 left-0 p-4 space-x-4 w-full">
            <button onClick={logout}>
              <TbLogout2 className="w-6 h-6 text-dark-yellow" />
            </button>
            <Link href="#">
              <IoSettings className="w-6 h-6 text-dark-yellow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
