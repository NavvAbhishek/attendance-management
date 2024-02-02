"use client";
import { FaHome } from "react-icons/fa";
import { BsClipboard2DataFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { FaHandsHelping } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { IoCreateSharp } from "react-icons/io5";
import { FaHouseUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const sideBar = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHome className="w-6 h-6 text-normal-blue" />
                <span className="ml-3">Home</span>
              </a>
            </li>
            <li>
              <Link href="/dashboard/create-class">
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <IoCreateSharp className="w-6 h-6 text-normal-blue" />

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Create Class
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/classess">
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <FaHouseUser className="w-6 h-6 text-normal-blue" />

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Classes
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/my-classes">
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <FaHouseUser className="w-6 h-6 text-normal-blue" />

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    My Classes
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/attendance-history">
                <button
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-pages"
                  data-collapse-toggle="dropdown-pages"
                >
                  <BsClipboard2DataFill className="w-6 h-6 text-normal-blue" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Attendance History
                  </span>
                </button>
              </Link>
            </li>
          </ul>
          <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="/profile"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FaUserLarge className="w-6 h-6 text-normal-blue" />
                <span className="ml-3">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <TbReportSearch className="w-6 h-6 text-normal-blue" />
                <span className="ml-3">Reports</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FaHandsHelping className="w-6 h-6 text-normal-blue" />
                <span className="ml-3">Help</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center absolute bottom-0 left-0 p-4 space-x-4 w-full  bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
          <a
            href="#"
            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={logout}
          >
            <TbLogout2 className="w-6 h-6 text-normal-blue" />
          </a>
          <a
            href="#"
            data-tooltip-target="tooltip-settings"
            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <IoSettings className="w-6 h-6 text-normal-blue" />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default sideBar;
