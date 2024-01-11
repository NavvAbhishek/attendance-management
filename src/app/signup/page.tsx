"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    role: "student"
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      console.log("Sending user data:", user);
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  //const [selectedValue, setSelectedValue] = useState("Student");

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedValue(event.target.value);
  //   console.log("Selected Value:", event.target.value);
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-normal-blue font-bold text-4xl mb-8">
        {loading ? "Processing..." : "Signup"}
      </h1>

      <div className="bg-white shadow-xl rounded-lg p-8 max-w-sm w-full">
        <hr className="mb-6 border-t-2 border-gray-200" />

        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Username
        </label>
        <input
          className="p-3 border border-gray-300 rounded-lg text-black w-full mb-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
        />

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          className="p-3 border border-gray-300 rounded-lg text-black w-full mb-4 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
        />

        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          className="p-3 border border-gray-300 rounded-lg text-black w-full mb-6 focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200"
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
        />
        {/* //! ----------------------Dropdown menu------------------------ */}
        <div className="mb-4">
          <select
           value={user.role}
           onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="p-2 border border-gray-300 rounded-lg"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        {/* //! ----------------------Signup Button------------------------ */}
        <button
          onClick={onSignup}
          type="button"
          className="
        w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4
        transition duration-200 ease-in-out transform hover:scale-105"
        >
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
        <Link
          href="/login"
          className="text-blue-500 hover:text-blue-600 transition duration-200"
        >
          Visit login page
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
