import { Outlet, Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import { IoMdTrain } from "react-icons/io";
import { AiOutlineSchedule } from "react-icons/ai";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-xl">

        {/* Logo */}
        <div className="p-6 border-b border-slate-700 flex items-center gap-3">
          <GrUserAdmin className="text-2xl" />
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>

        {/* Menu */}
        <nav className="p-6 space-y-3">

          <Link
            to="/dashboard/Addtrain"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
          >
            <IoMdTrain className="text-lg" />
            <span>Add Train</span>
          </Link>

          <Link
            to="/dashboard/schedule"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition"
          >
            <AiOutlineSchedule className="text-lg" />
            <span>Schedule</span>
          </Link>

        </nav>

      </aside>

      {/* Content Area */}
      <main className="flex-1 p-10">

    
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            Railway Admin Dashboard 
          </h1>
          <p className="text-slate-500">
            Manage trains and schedules from here
          </p>
        </div>

        {/* Page Content */}
        <div className="bg-white p-6 rounded-xl shadow">
          <Outlet />
        </div>

      </main>

    </div>
  );
}