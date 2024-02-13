"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { FaClipboard,FaPrint } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useReactToPrint } from "react-to-print";

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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        <div className="flex gap-2 items-end justify-center mt-2">
        <h2 className="text-md text-dark-blue font-semibold">Print</h2>
        <FaPrint
          className="cursor-pointer mt-2 w-5 h-5"
          onClick={handlePrint}
          title="Print Classes"
        />
      </div>
      </div>
    </div>
  );
};

export default ClassesPage;
