"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { FaClipboard } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import toast from "react-hot-toast";
import Loading from "@/components/Loading";
import PrintAsPdf from "@/components/PrintAsPdf";

type ClassData = {
  _id: string;
  year: string;
  semester: string;
  course: string;
  date: string;
  startTime: string;
  finishTime: string;
};

type UserData = {
  _id: string;
  role: string;
};

const ClassesPage = () => {
  const [classData, setClassData] = useState<ClassData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getClassesData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/classess"); //! Corrected endpoint
        console.log("API Response:", res.data);

        if (Array.isArray(res.data.data)) {
          //! Accessing the array inside the response object
          setClassData(res.data.data);
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
    getClassesData();
  }, []);

  const handleDeleteClass = async (classId: any) => {
    try {
      // Call DELETE API endpoint
      const response = await axios.delete(`/api/classess?id=${classId}`);
      console.log(response.data.message);
      toast.success("Class deleted successfully");

      // Refresh the class list
      const updatedClassData = classData.filter((cls) => cls._id !== classId);
      setClassData(updatedClassData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete class");
    }
  };

  useEffect(() => {
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

  if (isLoading) {
    return <Loading title="Classess" />;
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Session ID Copied Successfully!");
        console.log("Session ID Copied Successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="pattern-bg min-h-screen">
      {userData?.role === "teacher" ? (
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
        <div>
          <Navbar />
          <Link href="/dashboard">
            <BackButton title="Back to Dashboard" />
          </Link>
          <div>
            <div className="printableArea" ref={contentRef}>
              <div className="text-center">
                <h1 className="text-3xl font-bold text-light-blue pt-16 pb-8 md:py-10">
                  Classes
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
                        <th>Options</th>
                      </tr>
                    </thead>
                    <tbody className="table-body">
                      {classData.map((data, index) => (
                        <tr key={index}>
                          <td className="font-semibold">
                            {data._id.slice(6, 10)}
                          </td>
                          <td>{data.year}</td>
                          <td>{data.semester}</td>
                          <td>{data.course}</td>
                          <td>{data.date}</td>
                          <td>{data.startTime}</td>
                          <td>{data.finishTime}</td>
                          <td>
                            <div className="flex items-center justify-center">
                              <span>
                                <FaClipboard
                                  className="w-5 h-5 border-none"
                                  onClick={() => copyToClipboard(data._id)}
                                />
                              </span>
                              <span>
                                <MdDelete
                                  className="w-6 h-6 cursor-pointer"
                                  onClick={() => handleDeleteClass(data._id)}
                                  title="Delete Class"
                                />
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <PrintAsPdf contentRef={contentRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassesPage;
