"use client";
import { useState, useLayoutEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import SideBar from "@/components/SideBar";
import { PiStudentBold, PiBooksBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import Calander from "@/components/Calander";
import { Chart } from "@/components/Chart";

const cardData = [
  {
    Icon: PiStudentBold,
    title: "Total Students",
    number: 550,
  },
  {
    Icon: GiTeacher,
    title: "Total Teachers",
    number: 40,
  },
  {
    Icon: PiBooksBold,
    title: "Total Courses",
    number: 32,
  },
];

type UserData = {
  _id: string;
  role: string;
};

const DashBoard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useLayoutEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        console.log(res.data);
        setUserData(res.data.data);
      } catch (error: any) {
        console.error(error.message);
        toast.error(error.message);
      }
    };
    getUserDetails();
  }, []);

  return (
    <div>
      {userData?.role === "student" ? (
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-red-600 capitalize p-12">
            You don&apos;t have access to this page!!!
          </h1>
          <Link href="/">
            <button className="text-md font-bold text-red-700 p-2 rounded-md bg-dark-yellow ml-12">
              Back to Home
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex h-screen">
          <div className="w-[18%]">
            <SideBar />
          </div>

          <div className="w-[82%] pt-5">
            <div className="flex items-start gap-8">
              <div className="flex items-start gap-8">
                {cardData.map(({ Icon, title, number }) => (
                  <div className="flex items-center flex-col" key={title}>
                    <div className="p-3 bg-yellow-400 rounded-lg mb-3">
                      <Icon className="w-8 h-8 text-normal-blue" />
                    </div>
                    <p className="font-bold">{title}</p>
                    <p>{number}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full pt-10">
              <div className="w-[70%]">
                <h1 className="text-dark-blue font-bold text-2xl mb-5">
                  Attendance Overview Chart
                </h1>
                <Chart />
              </div>
              <div className="w-[30%] ">
                <Calander />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
