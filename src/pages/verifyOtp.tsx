import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../Components/button";
import Inputfield from "../Components/input";
import { message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
export default function Verifyotp () {

    const {userId }= useParams()
    const [Otp,setOtp] = useState("")
    const [time , settime] = useState(120)
    const navigate = useNavigate()



    const verify = async () => {
    try{
      const res = await axios.post(`http://localhost:4000/api/Auth/verifyOtp/${userId}` , 
            
            
                { Otp},
               {withCredentials: true}
            
            
        )

        if(res.data.isSuccessful) {
            
        message.success("Your Account is Verified")
            setOtp("")
            navigate("/")
    
        } else {
            message.error(res.data.message)
            console.log(res.data.message)
        }
    } catch (error) {
        message.error("Error")

    }

    }


    
    const resend = async () => {
    try{
      const res = await axios.post(`http://localhost:4000/api/Auth/resend/${userId}` , 
            {},
            
                
               {withCredentials: true}
            
            
        )

        if(res.data.isSuccessful) {
            
            
        message.success("check your Otp is resend")
            settime(120)
            
    
        } else {
            message.error(res.data.message)
        }
    } catch (error) {
        message.error("Error")
        console.log("Error:", error)

    }

    }

useEffect(() => {

    if(time === 0) return 
        const timer = setInterval(() => {
            settime((prev) => {
                if(prev <= 1) {
                    clearInterval(timer)
                    
                    return 0
                }
                return prev - 1
            })
        } , 1000)
        return () => clearInterval(timer)

        

        
    
},[time] )

const minutes = Math.floor(time / 60)
const seconds = time % 60


    return <>


<div className="min-h-screen bg-blue-500 flex items-center justify-center">

  <div className="bg-white w-[400px] p-8 rounded-2xl shadow-xl">

    <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
      Verify OTP
    </h2>

    
    <div className="mb-4">
        <label>
      Please Enter the Otp
</label>
      <Inputfield
        type="number"
        placeholder="Enter OTP"
        value={Otp}
        onChange={(e:any) => setOtp(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <Button
      Label="Verify OTP"
      onClick={verify}
      className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
    />

<p className="text-gray-500 text-center mt-3">
  OTP expires in {minutes}:{seconds < 10 ? `0${seconds}`: seconds}
</p>

<p className="cursor-pointer  pt-3 text-center"
 onClick={resend}>Resend Otp</p>

  </div>

</div>
    </>
}