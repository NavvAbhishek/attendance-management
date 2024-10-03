"use client";
import { useState, useLayoutEffect, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import SideBar from "@/components/SideBar";
import { PiStudentBold, PiBooksBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { MdRateReview, MdOutlineClass } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { Chart } from "@/components/Chart";
import { PieChart } from "@/components/PieChart";
import Loading from "@/components/Loading";

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
    Icon: MdOutlineClass,
    title: "Today Classes",
    number: 18,
  },
  {
    Icon: BsPeopleFill,
    title: "Weekly Attendance",
    number: 735,
  },
  {
    Icon: PiBooksBold,
    title: "Total Courses",
    number: 32,
  },
  {
    Icon: MdRateReview,
    title: "Attendance Rate",
    number: "95%",
    description: "This month",
  },
];

type MarkedClassData = {
  username: string;
  course: string;
};

const DashBoard = () => {
  const [attendanceCount, setAttendanceCount] = useState(null);
  const [markedClassData, setMarkedClassData] = useState<MarkedClassData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMarkedClassesData = async () => {
      try {
        const res = await axios.get("/api/att-history"); // Corrected endpoint
        console.log("API Response:", res.data);

        if (Array.isArray(res.data.data)) {
          // Accessing the array inside the response object
          setMarkedClassData(res.data.data);
        } else {
          console.error("Data is not an array", res.data);
          toast.error("Data is not in the expected format");
        }
      } catch (error: any) {
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMarkedClassesData();
  }, []);

  useEffect(() => {
    // Fetch user count from your API endpoint
    const fetchAttendanceCount = async () => {
      try {
        const response = await fetch("/api/attendance-count"); // Replace '/api/your-endpoint' with your actual API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAttendanceCount(data.attendanceCount);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchAttendanceCount();
  }, []);
  if (isLoading) {
    return <Loading title="Dashboard" />;
  }
  return (
    <div>
      <div className="h-screen flex">
        <div className="z-20 md:w-[20%]">
          <SideBar />
        </div>

        <div className="w-[100%] md:w-[80%] pt-5">
          <div className="flex flex-wrap items-center justify-center gap-8 w-[90%] mx-auto">
            {cardData.map(({ Icon, title, number }) => (
              <div className="flex items-center flex-col" key={title}>
                <div className="p-3 bg-yellow-400 rounded-lg mb-3">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-normal-blue" />
                </div>
                <p className="font-bold md:text-md text-sm">{title}</p>
                <p>{number}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center items-center md:items-start md:justify-start pt-10 md:flex-row flex-col">
            <div className="lg:w-[27.5rem] w-[25rem]">
              <h1 className="text-dark-blue font-bold text-2xl mb-5">
                Attendance Overview Chart
              </h1>
              <Chart />
            </div>
            <div className="w-[25rem]">
              <h1 className="text-dark-blue font-bold text-2xl mb-5">
                Participations For Courses
              </h1>
              <PieChart />
            </div>
            <div>
              <h1 className="text-dark-blue font-bold text-2xl mb-5">
                Today Attendance Count -{attendanceCount} <br />
              </h1>
              <h1 className="text-dark-blue font-bold text-2xl mb-5 pt-3 border-t-2 border-light-blue">
                Latest Attendances
              </h1>
              <div className="bg-light-blue rounded-lg">
                {markedClassData
                  .slice()
                  .reverse()
                  .map((data, index) => (
                    <div key={index} className="py-3">
                      <h2 className="px-6 capitalize text-lg text-dark-yellow">
                        {data.username}
                      </h2>
                      <p className="px-6 whitespace-nowrap text-sm text-white">
                        {data.course}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
