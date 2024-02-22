"use client";
import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";

interface ClassData {
  _id: string;
  year: string;
  semester: string;
  course: string;
  date: string;
  startTime: string;
  finishTime: string;
}

type UserData = {
  _id: string;
  role: string;
};

const MarkAttendence: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [allClassData, setAllClassData] = useState<ClassData[]>([]);
  const [displayedClassData, setDisplayedClassData] = useState<ClassData[]>([]);
  const [username, setUsername] = useState("nothing");
  const [userData, setUserData] = useState<UserData | null>(null);

  useLayoutEffect(() => {
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

  useEffect(() => {
    const getClassesData = async () => {
      try {
        const res = await axios.get("/api/classess");
        setAllClassData(res.data.data);
        //setDisplayedClassData(res.data.data);
      } catch (error: any) {
        console.error(error.message);
        toast.error(error.message);
      }
    };
    getClassesData();
  }, []);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        console.log("User Data", res.data);
        setUsername(res.data.data.username);
      } catch (error: any) {
        console.error(error.message);
        toast.error(error.message);
      }
    };
    getUserDetails();
  }, []);

  const handleSearch = () => {
    const filteredData = allClassData.filter((data) => data._id === searchTerm);
    if (filteredData.length > 0) {
      setDisplayedClassData(filteredData);
      console.log(displayedClassData);
    } else {
      toast.error("No class found with that ID");
    }
  };

  const handleClick = async (
    course: string,
    date: string,
    startTime: string
  ) => {
    try {
      const postData = {
        username, // assuming username is already in the state
        course,
        date,
        startTime,
      };
      const res = await axios.post("/api/mark-attendance", postData);
      if (res.status === 200) {
        console.log("Marked successfully", res.data);
        alert("Marked Successfull!");
        router.push("/profile");
        toast.success("Class marked successfully");
      } else {
        console.error("Error marking class:", res.data);
        toast.error("Error marking class");
      }
    } catch (error: any) {
      console.error("Error marking class:", error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      {userData?.role === "student" ? (
        <div>
          <Navbar />
          <div>
            <div className="flex items-center justify-center p-4 mt-10 sm:mt-7">
              <div className="flex border-2 rounded">
                <input
                  type="text"
                  className="px-4 py-2 w-80 md:w-96 lg:max-w-md"
                  placeholder="Enter Class ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="flex items-center justify-center px-4 border-l"
                  onClick={handleSearch}
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center ">
              {displayedClassData.map((data) => (
                <div
                  key={data._id}
                  className="bg-blue-50 w-[50%] sm:w-[45%] md:w-[35%] lg:w-[25%] flex flex-col gap-1 px-5 py-5 mt-5 rounded-md"
                >
                  <h1>Name - {username}</h1>
                  <h1>Course - {data.course}</h1>
                  <h1>Date - {data.date}</h1>
                  <h1>Start Time - {data.startTime}</h1>
                  <div>
                    <button
                      className="mark-button text-md font-bold text-dark-yellow px-2 py-[2px] mt-2 rounded-md bg-light-blue"
                      onClick={() =>
                        handleClick(data.course, data.date, data.startTime)
                      }
                    >
                      mark
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MarkAttendence;
