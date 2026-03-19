
import {MailOutlined  , PhoneOutlined , CaretDownFilled , DownSquareFilled   } from "@ant-design/icons"
import {  } from "react-icons/fa";

export default function Contact() {


  return (
    <div className="bg-gray-50 py-16 px-6">

      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">
          Contact Railway Support <DownSquareFilled />
        </h1>
        <p className="text-gray-500 mt-3">
          Need help with train schedules, booking or tickets? Our support team is here to help.
        </p>
      </div>

    
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

    
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
          <div className="text-4xl mb-4"><PhoneOutlined /></div>
          <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
          <p className="text-gray-600">+92 3362530186</p>
          <p className="text-gray-500 text-sm mt-2">
            Available 24/7 for railway inquiries
          </p>
        </div>

        {/* Email */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
          <div className="text-4xl mb-4"><MailOutlined /> </div>
          <h2 className="text-xl font-semibold mb-2">Email Support</h2>
          <p className="text-gray-600">a16753877@gmail.com</p>
          <p className="text-gray-500 text-sm mt-2">
            Send us your questions anytime
          </p>
        </div>

        {/* Office */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition text-center">
          <div className="text-4xl mb-4">
            <CaretDownFilled />
          </div>
          <h2 className="text-xl font-semibold mb-2">Head Office</h2>
          <p className="text-gray-600">
            Pakistan Railway Headquarters
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Karachi, Pakistan
          </p>
        </div>

      </div>

      {/* Help Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-10 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          We're Here to Help 
        </h2>
        <p className="text-gray-500 mt-3">
          Our railway support team is always ready to assist you with ticket
          booking, train schedules, cancellations and other travel information.
        </p>
      </div>

    </div>
  );
}