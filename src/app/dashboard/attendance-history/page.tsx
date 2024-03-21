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
      <div className="my-8 flex justify-center cursor-pointer">
        <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md bg-dark-yellow ">
          Attendance History
        </h1>
      </div>
     {markedClassData.length > 0 ? (
      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <table className="table min-w-full">
          <thead className="table-head bg-dark-blue text-dark-yellow">
                <tr>
                  <th>Username</th>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Start Time</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {markedClassData.map((classData, index) => (
                  <tr key={index}>
                    <td>{classData.username}</td>
                    <td>{classData.course}</td>
                    <td>{classData.date}</td>
                    <td>{classData.startTime}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
      </div>
     ):(
      <div className="text-center">
            <h1 className="text-xl text-red-500 font-bold capitalize">You did not mark any attendances</h1>
            <Link href="/profile/mark-attendance">
                <button className="blue-button text-lg mt-6">
                    Mark Attendances
                </button>
            </Link>
        </div>
     )}
    </div>
  );
};

export default AttendanceHistory;
