"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        {loading ? "Processing..." : "Login"}
      </h1>

      <div className="bg-white shadow-xl rounded-lg p-8 max-w-sm w-full">
        <hr className="mb-6 border-t-2 border-gray-200" />

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

        <button
          onClick={onLogin}
          type="button"
          className="
      w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 
      hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
      dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4
      transition duration-200 ease-in-out transform hover:scale-105"
        >
          Login
        </button>
        <Link
          href="/signup"
          className="text-blue-500 hover:text-blue-600 transition duration-200"
        >
          Visit Signup page
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
