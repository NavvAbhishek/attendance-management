"use client";
import BackButton from "@/components/BackButton";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import PrintAsPdf from "@/components/PrintAsPdf";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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
  const contentRef = useRef<HTMLDivElement>(null);


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
        setTimeout(() => {
          setIsLoading(false);
        }, 1750);
      }
    };
    getMarkedClassesData();
  }, []);

  if (isLoading) {
    return <Loading title="Attendance History" />;
  }

  return (
    <div className="pattern-bg min-h-screen">
      <Navbar />
      <Link href="/dashboard">
        <BackButton title="Back to Dashboard" />
      </Link>
      {markedClassData.length > 0 ? (
        <div>
          <div className="printableArea" ref={contentRef}>
          <div className="my-8 text-center pt-12 md:pt-0">
            <h1 className="text-3xl font-bold text-light-blue">
              Attendance History
            </h1>
          </div>
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
          </div>
          <PrintAsPdf contentRef={contentRef} />
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-xl text-red-500 font-bold capitalize">
            You did not mark any attendances
          </h1>
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
