"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import profileImg from "../../../public/profile-img.png";
import Navbar from "@/components/Navbar";

type UserData = {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
};

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
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

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md bg-dark-yellow mt-6">
            My Profile
          </h1>
        </div>
        <Image
          src={profileImg}
          alt="Picture of User"
          className="mt-4 sm:w-[325px] sm:h-[325px] w-[275px] h-[275px]"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        {userData && (
          <div className="sm:px-16 px-9 py-6 mt-6 rounded-lg bg-light-blue text-dark-yellow cursor-pointer ">
            <div>
              <span className="font-bold">Name - </span>
              {userData.username}{" "}
            </div>
            <div>
              <span className="font-bold">User ID - </span>
              {userData._id.slice(6, 10)}
            </div>
            <div>
              <span className="font-bold">Email - </span>
              {userData.email}{" "}
            </div>
          </div>
        )}

        <hr />
        <div className="buttons flex mt-8 sm:gap-[6.5rem] gap-12">
          <div>
            <Link href="/profile/mark-attendance">
              <h1 className="text-md font-bold text-light-blue p-2 rounded-md bg-dark-yellow">
                Mark Attendance
              </h1>
            </Link>
          </div>
          <div>
            <button
              type="button"
              onClick={logout}
              className="
         text-white bg-gradient-to-br from-purple-600 to-blue-500 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:focus:ring-blue-800 font-bold rounded-lg text-md text-center px-3 py-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
