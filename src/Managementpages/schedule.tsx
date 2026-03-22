import { message, Skeleton} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Schedule() {

  const [schedule, setSchedule] = useState<any[]>([]);
  const [loading, setloading] =useState(true)

  const [count , setcount] = useState(0)


  const getSchedule = async () => {
    try {
      const res = await axios.get("https://railway-backend-production-9329.up.railway.app/getTrain");
      console.log(res.data);
      setSchedule(res.data.data);
      setloading(false)
    } catch (error) {
      message.error("Error fetching schedule");
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);



  useEffect(() => {
    if(Schedule.length > 0) {
      setcount(Schedule.length)
    }
  } , [Schedule])

  const Skeletonrows = Schedule.length || count

  const formatDate = (DateStr: string) => {
    const date = new Date(DateStr);

    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  };

  const formatTime = (timeStr: string) => {

    const [hours, minutes] = timeStr.split(":");
    const date = new Date();
    date.setHours(Number(hours), Number(minutes));

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });
  };

  

  const DeleteSchedule = async (id: any) => {
    try {

      const del = await axios.delete(`http://localhost:4000/api/DeleteTrain/${id}`,
        {withCredentials: true}
      );
      console.log(del.data);

      setSchedule((prev) => prev.filter((t) => t._id !== id));
      message.success("Train Schedule is deleted");

    } catch (error) {
      console.log(error);
      message.error("Error");
    }
  };

  return (
    <>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl mt-6">

        

        <table className="min-w-full border-collapse">

          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Train Name</th>
              <th className="px-6 py-3 text-left">Train No</th>
              <th className="px-6 py-3 text-left">Departure Time</th>
              <th className="px-6 py-3 text-left">Arrival Time</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">To</th>
              <th className="px-6 py-3 text-left">Ticket Price</th>
              <th className="px-6 py-3 text-left">Remove</th>
            </tr>
          </thead>

          <tbody>

            {loading ? (
              Array.from({length: Skeletonrows}).map((_ , i) => (
                <tr key={i} className="border-b">

                  {Array.from({length:9}) .map((_ , j) => (
                    <td key={j}>

                      <Skeleton active paragraph={false}/>


                    </td>
                  ))}



                </tr>
              ))
            ): 
            schedule.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No trains found
                </td>
              </tr>
            ) : (
              schedule.map((t, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-slate-100 transition"
                >
                  <td className="px-6 py-4">{t.TrainName}</td>
                  <td className="px-6 py-4">{t.TrainNum}</td>
                  <td className="px-6 py-4">{formatTime(t.DepratureTime)}</td>
                  <td className="px-6 py-4">{formatTime(t.arrivaltime)}</td>
                  <td className="px-6 py-4">{formatDate(t.date)}</td>
                  <td className="px-6 py-4">{t.To}</td>
                  <td className="px-6 py-4">{t.ticketprice}</td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => DeleteSchedule(t._id)}
                      className="bg-red-400 w-[70px] h-[30px] rounded-md cursor-pointer text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
                

      </div>
    </>
  );
}