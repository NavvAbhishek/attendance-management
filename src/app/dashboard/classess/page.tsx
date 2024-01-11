"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaClipboard } from "react-icons/fa";

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

  useEffect(() => {
    const getClassesData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/api/classess"); // Corrected endpoint
        console.log("API Response:", res.data);

        if (Array.isArray(res.data.data)) {
          // Accessing the array inside the response object
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
        // You can also show a toast or alert to inform the user
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  // Render classes
  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-8 flex justify-center cursor-pointer">
          <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md bg-dark-yellow ">
            Classes
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-lg mx-auto mt-10 w-[70%] md:w-[60%] lg:w-[50%] mb-10">
          {classData.map((data) => (
            <div
              className="card bg-normal-blue p-4 rounded-lg shadow-md cursor-pointer"
              key={data._id}
            >
              <div className="text-md text-light-yellow ">
                <h3>
                  <span>Year</span>-{data.year}
                </h3>
                <h3>
                  <span>Semester</span>-{data.semester}
                </h3>
                <h3 className="font-bold">{data.course}</h3>
                <h3 className="font-bold">{data.date}</h3>
                <h3>
                  {data.startTime}-{data.finishTime}
                </h3>
                <h3 className="flex gap-3 items-center">
                  <div>
                    <span className="cursor-pointer">
                      Session ID -{data._id.slice(6, 10)}
                    </span>
                  </div>
                  <FaClipboard
                    className="w-4 h-4"
                    onClick={() => copyToClipboard(data._id)}
                  />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;
