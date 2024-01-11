import React from "react";
import SideBar from "@/components/SideBar";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { PiBooksBold } from "react-icons/pi";
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

const DashBoard = () => {
  return (
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
  );
};

export default DashBoard;
