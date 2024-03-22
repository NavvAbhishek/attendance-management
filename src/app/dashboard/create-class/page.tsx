"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import BackButton from "@/components/BackButton";

const years = [1, 2, 3, 4];
const semesters = [1, 2];
const courses = [
  "Business Management",
  "Marketing Strategies and Innovations",
  "Financial Analysis and Planning",
  "Advanced Molecular Biology",
  "Environmental Science and Sustainability",
  "Quantum Mechanics and Applications",
  "Robotics and Automation",
  "Civil Infrastructure Engineering",
  "Renewable Energy Systems",
  "Cloud Computing and Virtualization",
  "Cybersecurity and Information Assurance",
  "Artificial Intelligence and Machine Learning",
];

const CreateClassPage: React.FC = () => {
  const router = useRouter();
  const [classData, setClassData] = useState({
    year: "",
    semester: "",
    course: "",
    date: "",
    startTime: "",
    finishTime: "",
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      console.log("Sending class data:", classData);
      const response = await axios.post("/api/create-class", classData);
      console.log("Class Data addedd successfully", response.data);
      // Reset the form here
      setClassData({
        year: "",
        semester: "",
        course: "",
        date: "",
        startTime: "",
        finishTime: "",
      });
      toast("Class Added Successfully!", {
        icon: "🎓",
      });
      router.push("/dashboard/create-class");
    } catch (error: any) {
      console.log(
        "const response = await axios.post(/api/create-class, classData);"
      );
      console.log("Class Data addedd failed", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="">
      <Navbar />
      <div className="relative bg-blue-50">
        <Link href="/dashboard">
          <BackButton
            title="Back to Dashboard"
            className="top-4 md:top-8 left-5"
          />
        </Link>
        <form
          className="flex justify-center items-center h-auto sm:py-6 py-[70px]"
          onSubmit={handleSubmit}
        >
          <div className="sm:px-10 sm:py-5 px-7 bg-white rounded shadow-xl sm:w-9/12 md:w-3/5 lg:w-3/6 w-9/12 mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-dark-blue">
              Create a Class
            </h2>
            {/*//! --------------------Year--------------------- */}
            <div className="mb-4">
              <label
                className="block text-normal-blue text-sm font-bold mb-2"
                htmlFor="year"
              >
                Year
              </label>
              <select
                name="year"
                id="year"
                onChange={(e) =>
                  setClassData({ ...classData, year: e.target.value })
                }
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={classData.year}
              >
                <option value="" disabled>
                  Select Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            {/* //! --------------------Semester--------------------- */}
            <div className="mb-4">
              <label
                className="block text-normal-blue text-sm font-bold mb-2"
                htmlFor="semester"
              >
                Semester
              </label>
              <select
                name="semester"
                id="semester"
                onChange={(e) =>
                  setClassData({ ...classData, semester: e.target.value })
                }
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={classData.semester}
              >
                <option value="" disabled>
                  Select Semester
                </option>
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
              </select>
            </div>
            {/* //! -------------------- Course --------------------- */}
            <div className="mb-4">
              <label
                className="block text-normal-blue text-sm font-bold mb-2"
                htmlFor="course"
              >
                Course
              </label>
              <select
                name="course"
                id="course"
                onChange={(e) =>
                  setClassData({ ...classData, course: e.target.value })
                }
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={classData.course}
              >
                <option value="" disabled>
                  Select Course
                </option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
            {/* //! -------------------- Date --------------------- */}
            <div className="mb-4">
              <label
                className="block text-normal-blue text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                value={classData.date}
                onChange={(e) =>
                  setClassData({ ...classData, date: e.target.value })
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* //! -------------------- Time --------------------- */}
            <div className="mb-6 flex items-center justify-between gap-8">
              <div className="w-full">
                <label
                  className="block text-normal-blue text-sm font-bold mb-2"
                  htmlFor="startTime"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  value={classData.startTime}
                  onChange={(e) =>
                    setClassData({ ...classData, startTime: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-normal-blue text-sm font-bold mb-2"
                  htmlFor="finishTime"
                >
                  Finish Time
                </label>
                <input
                  type="time"
                  id="finishTime"
                  value={classData.finishTime}
                  onChange={(e) =>
                    setClassData({ ...classData, finishTime: e.target.value })
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-light-blue hover:bg-dark-blue text-light-yellow font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              Create Class
            </button>
          </div>
        </form>
        <div className="flex justify-center cursor-pointer mt-[-10px] pb-5">
          <Link href="/dashboard/my-classes">
            <button className="flex items-center gap-3 text-xl font-bold text-light-blue p-2 rounded-md bg-dark-yellow ">
              My Classes
              <FaAnglesRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateClassPage;
