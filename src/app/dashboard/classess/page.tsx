"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { FaClipboard } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type ClassData = {
  _id: string;
  year: string;
  semester: string;
  course: string;
  date: string;
  startTime: string;
  finishTime: string;
};

const ClassesPage = () => {
  const [classData, setClassData] = useState<ClassData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const componentRef = useRef<HTMLDivElement>(null);

 

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
        setIsLoading(false);
      }
    };
    getClassesData();
  }, []);

  if (isLoading) {
    return <div>Loading classes...</div>;
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
        console.log("Session ID copied to clipboard");
        //! You can also show a toast or alert to inform the user
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const deleteClass = async (classId: string) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      try {
        const response = await axios.delete('/api/delete-class', {
          data: { classId },
        });
        toast.success(response.data.message);
        setClassData(currentData => currentData.filter(data => data._id !== classId));
      } catch (error: any) {
        toast.error(`Error: ${error.response?.data?.error || error.message}`);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="printableArea" ref={componentRef}>
          <div className="my-8 flex justify-center cursor-pointer">
            <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md">
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
                      <td className="font-semibold">{data._id.slice(6, 10)}</td>
                      <td>{data.year}</td>
                      <td>{data.semester}</td>
                      <td>{data.course}</td>
                      <td>{data.date}</td>
                      <td>{data.startTime}</td>
                      <td>{data.finishTime}</td>
                      <td className="flex items-center justify-center overflow-hidden">
                        <span>
                          <FaClipboard
                            className="w-5 h-5 border-none"
                            onClick={() => copyToClipboard(data._id)}
                          />
                        </span>
                        <span>
                          <MdDelete
                            className="w-6 h-6"
                            onClick={() => deleteClass(data._id)}
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
