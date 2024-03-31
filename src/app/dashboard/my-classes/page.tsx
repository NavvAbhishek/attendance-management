"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import Loading from "@/components/Loading";
import PrintAsPdf from "@/components/PrintAsPdf";

interface ClassItem {
  _id: string;
  teacherId: string;
  year: string;
  semester: string;
  course: string;
  date: string;
  startTime: string;
  finishTime: string;
}

const MyClasses = () => {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/my-classes");
        setClasses(response.data.classes);
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1750);
      }
    };

    fetchClasses();
  }, []);

  if (isLoading) {
    return <Loading title="My Classes" />;
  }

  return (
    <div>
      <Navbar />
      <Link href="/dashboard">
        <BackButton title="Back to Dashboard" />
      </Link>
      {classes.length > 0 ? (
        <div>
          <div className="printableArea" ref={contentRef}>
            <div className="my-8 flex justify-center">
              <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md">
                My Classes
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="overflow-x-auto">
                <table className="table min-w-full">
                  <thead className="table-head bg-dark-blue text-dark-yellow">
                    <tr>
                      <th>Class ID</th>
                      <th> Year</th>
                      <th>Semester</th>
                      <th>Course</th>
                      <th>Date</th>
                      <th>Start Time</th>
                      <th>Finish Time</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {classes.map((classData, index) => (
                      <tr key={index}>
                        <td>{classData._id.slice(6, 10)}</td>
                        <td>{classData.year}</td>
                        <td>{classData.semester}</td>
                        <td>{classData.course}</td>
                        <td>{classData.date}</td>
                        <td>{classData.startTime}</td>
                        <td>{classData.finishTime}</td>
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
            You did not create any classes
          </h1>
          <Link href="/dashboard/create-class">
            <button className="blue-button text-lg mt-6">Create Class</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
