import { useState } from 'react';
import Telkom from'../assets/Images/Logo Telkom.png';
import { LockKeyhole, Mail} from 'lucide-react'

export default function LoginPage() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  return (
    <div className="flex items-center justify-center h-screen mx-20  ">
      <div className=" rounded-lg flex w-[1000px]">
       
        <div className="w-1/2 p-10 mr-20">
          <form>
            <div className="mb-10">
              <label className="block text-[#9D9CA3] py-2">Email Address</label>
              <div className="relative">
               {/* {email === "" && ( */}
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500 ">
                  <Mail color="#d1cece" />
                </span>
               {/* )} */}
                <input 
                  type="email"
                  placeholder=""
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className=" h-12 w-full px-4 py-2 pl-10 border border-gray-300 rounded-[6px] "
                />

              </div>
            </div>
            <div className="mb-8">
              <label className="block text-[#9D9CA3] py-2">Password</label>
              <div className="relative">
                {/* {password === "" &&( */}
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <LockKeyhole color="#d1cece" />
                </span>
                {/* // )} */}
                <input 
                  type="password"
                  placeholder=""
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  className=" h-12 w-full px-4 py-2 pl-10 border border-gray-300 rounded-[6px] "
                />
              </div>
            </div>
            <button className="w-full h-12 bg-[#EC2C24] text-white py-2 rounded-lg hover:bg-red-500 transition">
              Login
            </button>
          </form>
          <p className="mt-4 text text-[#9D9CA3]">
            Don't have an account? <span className="text-red-500 cursor-pointer font-semibold transition duration-300 hover:text-red-600 hover:underline hover:scale-105 ">Sign Up!</span>
          </p>
          <hr className="w-full  border-[#9D9CA3] mt-10" /> 
        </div>
        
        {/* Logo Section */}
        <div className="w-1/2 flex items-center justify-center pl-20">
          <div className="text-center">
            <img
              src={Telkom}
              alt="Telkom Indonesia"
              className="w-120 mx-auto mb-4 "
            />
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
