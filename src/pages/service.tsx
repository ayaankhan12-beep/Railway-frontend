
import { LuTicketCheck } from "react-icons/lu";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";


export default function Services() {
  return (
    <div className="bg-gray-50 py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Our Railway Services 
        </h1>
        <p className="text-gray-500 mt-3">
          Making your train journey comfortable, safe and reliable.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Service */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="text-4xl mb-4"><LuTicketCheck />
</div>
          <h2 className="text-xl font-semibold mb-2">Ticket Booking</h2>
          <p className="text-gray-600 text-sm">
            Book train tickets easily through our smart railway system.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="text-4xl mb-4"><AiOutlineSchedule />
</div>
          <h2 className="text-xl font-semibold mb-2">Train Schedule</h2>
          <p className="text-gray-600 text-sm">
            Check departure and arrival times of all available trains.
          </p>
        </div>

        

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="text-4xl mb-4"><FaClock />
</div>
          <h2 className="text-xl font-semibold mb-2">Live Train Status</h2>
          <p className="text-gray-600 text-sm">
            Track trains in real-time and check delays instantly.
          </p>
        </div>



        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <div className="text-4xl mb-4"><FaPhone />
</div>
          <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
          <p className="text-gray-600 text-sm">
            Our support team is available to assist you anytime.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-800">
          Travel Smart with Our Railway System 
        </h2>
        <p className="text-gray-500 mt-2">
          Fast booking, real-time train updates and reliable services.
        </p>
      </div>

    </div>
  );
}