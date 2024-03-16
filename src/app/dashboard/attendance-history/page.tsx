"use client";
import BackButton from "@/components/BackButton";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type MarkedClassData = {
  username: string;
  course: string;
  date: string;
  startTime: string;
};

const AttendanceHistory = () => {
  const [markedClassData, setMarkedClassData] = useState<MarkedClassData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMarkedClassesData = async () => {
      try {
        setIsLoading(true);
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

  if (isLoading) {
    return <div>Loading classes...</div>;
  }

  return (
    <div>
      <Navbar />
      <Link href="/dashboard">
        <BackButton
          title="Back to Dashboard"
        />
      </Link>
      <div className="mt-8 flex justify-center cursor-pointer">
        <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md bg-dark-yellow ">
          Attendance History
        </h1>
      </div>
      <div className=" flex justify-center mt-10">
        <table className="w-[70%] md:w-[65%] lg:w-[50%] bg-blue-50">
          <thead>
            <tr className="text-light-blue font-bold text-sm">
              <th className="px-6 py-3 text-left  uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 text-left uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {markedClassData.map((data, index) => (
              <tr key={index} className="bg-white">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.course}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.startTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceHistory;
