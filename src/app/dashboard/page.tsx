"use client";
import { useState, useLayoutEffect, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import SideBar from "@/components/SideBar";
import { PiStudentBold, PiBooksBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { Chart } from "@/components/Chart";
import { PieChart } from "@/components/PieChart";

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
  const [attendanceCount, setAttendanceCount] = useState(null);

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

    // const getAttendanceCounts = async () => {
    //   try {
    //     const response = await axios.get('/api/attendance-count');
    //     setAttendanceCounts(response.data);
    //   } catch (error) {
    //     toast.error('Error fetching attendance counts');
    //   }
    // };
    getUserDetails();
    // getAttendanceCounts();
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

  // useEffect(() => {
  //   const fetchAttendanceCounts = async () => {
  //     try {
  //       const response = await axios.get("/api/attendance-count");
  //       setTotalAttendance(response.data.totalAttendance);
  //       setTodayAttendance(response.data.todayAttendance);
  //     } catch (error) {
  //       console.error("Error fetching attendance counts:", error);
  //       toast.error("Failed to fetch attendance counts");
  //     }
  //   };
  //   fetchAttendanceCounts();
  // });

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
        <div className="h-screen flex">
          <div className="z-20 md:w-[20%]">
            <SideBar />
          </div>

          <div className="w-[100%] md:w-[80%] pt-5">
            <div className="flex items-center justify-center gap-8">
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
                  Total Attendance Count -{attendanceCount} <br />
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
