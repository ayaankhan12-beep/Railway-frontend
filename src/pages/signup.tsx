import { useState } from "react";
import Button from "../Components/button";
import axios from "axios"
import {message} from "antd"
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


export default  function Signup() {

    const navigate = useNavigate()

    const [username , setusername] = useState("")

        const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const [showpassword , setshowpassword] = useState(false)

    const [loader , setloader] = useState(false)


    const Handle = async () => {

        if(!username || !email || !password) {
            message.warning("please fill the all fields")
        }
        setloader(true)

        try {
            const res = await axios.post("http://localhost:4000/api/Auth/signUp" ,
                {username , email , password},
                {withCredentials: true}
            )

            if(res.data.isSuccessful === true){
                message.success("Signup sucessfull check your OTP")
                
                navigate(`/verifyOtp/${res.data.userId}`)
                
                setusername("")
                setemail("")
                setpassword("")
            } else {
                message.error(res.data.message)
                
            }
        

            

        } catch (error) {
            message.error("signUp failed")
        }
        finally {
            setloader(false)
        }

    }

    return <>
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400">

  <div className="w-[380px] bg-white rounded-2xl shadow-2xl p-8 space-y-4">

    <h1 className="text-2xl font-bold text-center text-gray-800">
      Welcome
    </h1>

    <p className="text-sm text-center text-gray-500 mb-4">
      Sign up to your account
    </p>

    {/* Username */}
    <input
      className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
      type="text"
      value={username}
      placeholder="Enter username"
      onChange={(e:any) => setusername(e.target.value)}
    />

    {/* Email */}
    <input
      className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 transition"
      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e:any) => setemail(e.target.value)}
    />

    {/* Password */}
    <div className="relative">

      <input
        className="w-full border border-gray-300 rounded-lg p-3 pr-10 outline-none focus:ring-2 focus:ring-blue-400 transition"
        type={showpassword ? "text" : "password"}
        value={password}
        placeholder="Enter password"
        onChange={(e:any) => setpassword(e.target.value)}
      />

      {password && (
        <span
          onClick={() => setshowpassword(!showpassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700"
        >
          {showpassword ? <FaEye /> : <FaRegEyeSlash />}
        </span>
      )}

    </div>

    {/* Button */}
    <Button
      disabled={loader}
      onClick={Handle}
      type="primary"
      Label="Sign Up"
      className="w-full"
    />

  </div>
</div>

    </>
}