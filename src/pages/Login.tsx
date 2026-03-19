import { useState } from "react";
import Inputfield from "../Components/input";
import Button from "../Components/button";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


export default function Login () {

  const navigate = useNavigate()
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const [showpassword , setshowpassword] = useState(false)
    const [loader , setloader] = useState(false)


    const Hanldelogin = async () => {

        setloader(true)
try {
        const res = await axios.post("http://localhost:4000/api/Auth/login",
            {email , password},
            {withCredentials: true}
        )

        if(res.data.isSucessfull === true) {

            message.success("Login Sucess")
            navigate("/")
            setemail("")
            setpassword("")
            if(res.data.role === "Admin"){
              navigate("/dashboard")
            }
        } else {
            message.error(res.data.message)
        }
    }
    catch (error) {
        message.error("Signup failed")

    }

    finally {
        setloader(false)
    }

    }

    
    
    return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400">
    
    <div className="w-[380px] bg-white rounded-2xl shadow-2xl p-6">
      
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome Back
      </h1>

      <p className="text-sm text-center text-gray-500 mb-6">
        Login to your account
      </p>

      <div className="space-y-4">
        <Inputfield
          value={email}
          placeholder="Enter Email"
          onChange={(e: any) => setemail(e.target.value)}
        />
        <div className="relative">

        <Inputfield
          type={showpassword ? "text" : "password"}
          value={password}
          placeholder="Enter Password"
          onChange={(e: any) => setpassword(e.target.value)}
        />
        {password &&  (
          <span onClick={() => setshowpassword(!showpassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700">
      {showpassword ? <FaEye /> : <FaRegEyeSlash />}
    </span>

        )}
</div>
        <Button
          title="Login"
          onClick={Hanldelogin}
          loading={loader}
          Label="Login"
        />

        <p onClick={() => navigate("/signup")}
        className="text-xs text-center text-gray-400 mt-6 cursor-pointer">
        Create new Account
      </p>
      </div>

      <p 
      className="text-xs text-center text-gray-400 mt-6">
        © 2026 Your App
      </p>

    </div>
  </div>
);
}