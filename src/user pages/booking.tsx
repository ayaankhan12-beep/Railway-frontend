import { useState } from "react";
import Inputfield from "../Components/input";
import { message } from "antd";
import axios from "axios";
import Button from "../Components/button";
import { useParams } from "react-router-dom";

export default function Booking() {

  const {trainId} = useParams()
  const [name, setname] = useState("");
  const [cnic, setCnic] = useState("");
  const [Age , setAge] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState<any>(null);
  const [loader , setloader] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setloader(true);

    
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("cnic", cnic);
      formData.append("Age", Age);
      formData.append("email", email);
      formData.append("image", image);

      const res = await axios.post(
        `http://localhost:4000/api/booking/${trainId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.isSuccessful) {
        message.success("Ticket booked! Check your email 📧");

        // reset form
        setname("");
        setCnic("");
        setAge("");
        setemail("");
        setimage(null);

        
      } else {
        message.error(res.data.message);
      }

    } catch (error:any) {
      console.log(error);
      message.error(error.response?.data?.message || "Ticket not confirmed");
    } finally {
      setloader(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">
          Ticket Booking Form
        </h2>

        {/* Traveller Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Traveller Name
          </label>
          <Inputfield
            type="text"
            value={name}
            onChange={(e:any) => setname(e.target.value)}
            placeholder="Enter passenger name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* CNIC */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            CNIC
          </label>
          <Inputfield
            type="text"
            value={cnic}
            onChange={(e:any) => setCnic(e.target.value)}
            placeholder="Enter CNIC"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Age
          </label>
          <Inputfield
            type="number"
            value={Age}
            onChange={(e:any) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <Inputfield
            type="email"
            value={email}
            onChange={(e:any) => setemail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Passenger image
          </label>
          <Inputfield
            type="file"
            onChange={(e:any) => setimage(e.target.files[0])}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit */}
        <Button
          disabled={loader}
          type="submit"
          Label={loader ? "Booking..." : "Book Ticket"}
        />
      </form>
    </div>
  );
}