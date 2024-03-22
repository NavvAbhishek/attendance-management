"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { FaClipboard, FaPrint } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import toast from 'react-hot-toast';

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

  const deleteClass = async (classId: string) => {
    if (!confirm('Are you sure you want to delete this class?')) {
      return;
    }
  
    try {
      const res = await axios.delete('/api/delete-classes', { data: { classId } });
      console.log("Deleted Class Response:", res.data);
  
      // Remove the class from the state
      setClassData(classData.filter((data) => data._id !== classId));
      toast.success("Class successfully deleted");
    } catch (error: any) {
      console.error(error.message);
      toast.error("Failed to delete class");
    }
  };

  if (isLoading) {
    return <div>Loading classes...</div>;
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Session ID Copied Successfully!')
        console.log('Session ID Copied Successfully!')
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      <Navbar />
      <Link href="/dashboard">
        <BackButton title="Back to Dashboard" />
      </Link>
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
                        <MdDelete className="w-6 h-6 cursor-pointer" onClick={() => deleteClass(data._id)} title="Delete Class" />
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
