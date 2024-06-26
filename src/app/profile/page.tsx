"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import profileImg from "../../../public/profile-img.png";
import Navbar from "@/components/Navbar";
import BackButton from "@/components/BackButton";

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
      console.log("Logout successful");
      router.push("/");
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
    <div className="pattern-bg min-h-screen">
      <Navbar />
      <Link href="/">
        <BackButton title="Back to Home" />
      </Link>
      <div className="flex flex-col items-center ">
        <div>
          <h1 className="text-3xl font-bold text-light-blue p-2 rounded-md mt-16 sm:mt-18">
            My Profile
          </h1>
        </div>
        {userData && (
          <div className="flex flex-col gap-4 items-center sm:px-16 px-9 py-6 mt-6 rounded-lg bg-light-blue text-dark-yellow cursor-pointer ">
            <div>
              <Image
                src={profileImg}
                alt="Picture of User"
                className="mt-4 w-[125px] h-[125px] rounded-2xl"
              />
            </div>
            <div>
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
          </div>
        )}
        <hr />
        <div className="buttons flex mt-8 sm:gap-[4.5rem] gap-10">
          {userData?.role === "student" ? (
            <div className=" flex flex-col gap-8">
              <button className="normal-yellowhover-button font-bold">
                <Link href="/profile/mark-attendance">Mark Attendance </Link>
              </button>
              <button className="normal-yellowhover-button font-bold mb-10 md:mb-0">
                <Link href="/profile/my-att-history">
                  My Attendance History
                </Link>
              </button>
            </div>
          ) : (
            ""
          )}
          <div>
            <button
              type="button"
              onClick={logout}
              className="normal-bluehover-button font-bold"
              style={{ padding: '0.5rem 1.25rem' }} 
              >
              Logout
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProfilePage;
