"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"


const ProfilePage = () => {
  const router = useRouter()
  const logout = async ()=> {
    try {
      await axios.get('/api/users/logout')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.log(error.message)
      toast.error(error.message)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl'>Profile</h1>
      <hr />
      <button
        type="button"
        onClick={logout}
        className="
        mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 
        hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Logout
      </button>
    </div>


  )
}

export default ProfilePage