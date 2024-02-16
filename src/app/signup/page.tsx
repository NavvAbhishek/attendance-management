"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import logo from "../../../public/Logo.png";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    role: "student",
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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100  pattern-bg">
      <h1 className="white-button font-bold shadow-xl text-4xl mb-5">
        {loading ? "Processing..." : "Signup"}
      </h1>
      <Image
        src={logo}
        alt="logo"
         width={100} 
        height={100} 
        className="rounded-lg mb-5"
      />
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-sm w-full">

        <label
          htmlFor="username"
          className="block text-sm font-medium text-light-blue mb-1"
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
          className="block text-sm font-medium text-light-blue mb-1"
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
          className="block text-sm font-medium text-light-blue mb-1"
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
        w-full font-medium rounded-lg text-sm blue-button mb-4
        transition duration-200 ease-in-out transform hover:scale-105"
        >
          {buttonDisabled ? "No Signup" : "Signup"}
        </button>
        <Link
          href="/login"
          className="text-light-blue hover:text-dark-blue transition duration-200"
        >
          Visit login page
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
