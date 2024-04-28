"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Loading from "@/components/Loading";

interface MarkedClassItem {
  _id: string;
  studentId: string;
  username: string;
  course: string;
  date: string;
  startTime: string;
}
const MyAttendanceHistory = () => {
  const [classes, setClasses] = useState<MarkedClassItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/my-att-history");
        // Check if response.data.classes is an array
        if (Array.isArray(response.data.markedClass)) {
          setClasses(response.data.markedClass);
        } else {
          console.error("Invalid format received from API");
          // Optionally set classes to an empty array or handle the error differently
          setClasses([]);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
        setClasses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClasses();
  }, []);

  if (isLoading) {
    return <Loading title="Attendance History" />;
  }

  return (
    <div className="pattern-bg min-h-screen">
      <Navbar />
      <div className="my-8 flex justify-center">
        <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md">
          My Attendance History
        </h1>
      </div>
      {classes.length > 0 ? (
        <div className="flex justify-center">
          <div className="overflow-x-auto">
            <table className="table min-w-full">
              <thead className="table-head bg-dark-blue text-dark-yellow">
                <tr>
                  <th>Course</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {classes.map((classData, index) => (
                  <tr key={index}>
                    <td>{classData.course}</td>
                    <td>{classData.date}</td>
                    <td>{classData.startTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-xl text-red-500 font-bold capitalize">
            You did not mark any Attendance
          </h1>
          <Link href="/profile/mark-attendance">
            <button className="blue-button text-lg mt-6">
              Mark Attendance
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyAttendanceHistory;
