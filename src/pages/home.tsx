import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { LuTicketCheck } from "react-icons/lu";

export default function Home() {

const navigate = useNavigate()
  const logout = async() => {

    try {
       await axios.post("https://railway-backend-production-9329.up.railway.app/logout",
        {},
            {withCredentials: true}

    )
    
      
      message.success("User logged out")
      navigate("/login")
    

    
    } catch (error) {
      message.error("error")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-5">
        <h1 className="text-2xl font-bold">🚆 Smart Railway</h1>
        <div className="hidden md:flex gap-8 text-sm">
          <a className="hover:text-blue-300 cursor-pointer">Home</a>
          <a onClick={() => navigate("/service")}
          className="hover:text-blue-300 cursor-pointer">Services</a>
          <a onClick={() => navigate("/contact")}
          className="hover:text-blue-300 cursor-pointer">Contact</a>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-sm cursor-pointer">
          Login
        </button>
         <button onClick={() => navigate("/signup")} className="bg-blue-600 cursor-pointer hover:bg-blue-700 px-5 py-2 rounded-xl text-sm">
          Register
        </button>


      

        <button onClick={logout}
        className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-sm cursor-pointer">
          LogOut
        </button>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-16 py-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Smart Railway <br /> Management System
          </h2>
          <p className="text-gray-300 mt-5 max-w-lg">
            A modern railway solution for online ticket booking, train schedules
            and real-time train status. Fast, secure and reliable.
          </p>
          <div className="mt-8  gap-4">
            <button onClick={() => navigate("/userSchedule")}
             className="border border-white/40 hover:bg-white/10 px-6 py-3 rounded-xl">
              View Schedule
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i.dawn.com/primary/2022/05/6276e99d2c58d.jpg"
            className="rounded-3xl shadow-2xl max-h-[360px] object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-16 pb-24">
        <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition">
            <h4 className="font-semibold text-lg"><FaClock /> Train Status</h4>
            <p className="text-sm text-gray-300 mt-2">Live train tracking & updates</p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition">
            <h4 className="font-semibold text-lg"><LuTicketCheck /> Ticket Booking</h4>
            <p className="text-sm text-gray-300 mt-2">Easy & fast online booking</p>
          </div>

          <div className="bg-white/10 backdrop-blur p-6 rounded-2xl hover:bg-white/20 transition">
            <h4 className="font-semibold text-lg"><AiOutlineSchedule /> Train Schedule</h4>
            <p className="text-sm text-gray-300 mt-2">Accurate train timings</p>
          </div>

         
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6 border-t border-white/10">
        © 2026 Smart Railway System | Built by Ayaan
      </footer>
    </div>
  );
}
