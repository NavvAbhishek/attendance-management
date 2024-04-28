"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import Img from "../../../public/login_img.png";

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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 pattern-bg">
      <div className="logo flex flex-row gap-5 items-center md:mb-5">
        <Image
          src="/Logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
        />
        <h1 className="text-2xl md:text-4xl font-bold">Attendix</h1>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="mt-3 md:mt-0">
          <Image
            src={Img}
            alt="login_img"
            className="w-[400px] md:w-[500px] h-[550px] object-cover md:rounded-s-lg"
          />
        </div>
        <div className="bg-dark-yellow shadow-xl p-8 h-[550px] w-[400px] md:w-[450px] mb-10 md:mb-0 md:rounded-e-lg">
          <h1 className="font-bold text-center mb-4 text-4xl">
            {loading ? "Processing..." : "Login"}
          </h1>

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
            w-full font-medium rounded-lg text-sm blue-button mb-4
            transition duration-200 ease-in-out transform hover:scale-105"
          >
            {buttonDisabled ? "No Login" : "Login"}
          </button>
          <div>
            Don&apos;t have an account?{" "}
            <span className="font-semibold text-light-blue hover:text-dark-blue transition duration-200">
              <Link href="/signup">Signup</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
