import { useEffect, useState } from "react";
import Inputfield from "../Components/input";
import Button from "../Components/button";
import axios from "axios";
import { message, Skeleton } from "antd";


export default function Add() {

const [TrainName , setTrainName] = useState("")
const [TrainNum , setTrainNum] = useState("")
const [DepratureTime , setDepratureTime] = useState("")
const [date , setdate] = useState("")
const [arrivaltime, setarrivaltime] = useState("")

const [To , setTo] = useState("")
const [ticketprice , setticketprice] = useState("")
const [Category , setCategory] = useState("")


const [loader , setloader] = useState(false)
const [loading , setloading] = useState(true)



useEffect(() => {
  const timer = setTimeout(() => {
    setloading(false)
  }, 500)
  return () => clearInterval(timer)
} , [])
const Handle = async  (e:any) => {

  
e.preventDefault()
setloader(true)
if(!TrainName ||!TrainNum ||!DepratureTime||!arrivaltime||!date||!To ||!ticketprice||!Category ){
  message.warning("please all fields are required")
}

try {

  
    const res = await axios.post("http://localhost:4000/api/Addtrain",
        {TrainName , TrainNum , DepratureTime  , arrivaltime, date , To , ticketprice , Category },
        {withCredentials: true}

    )
if(res.data.isSucessfull === true) {
    message.success("Add train sucessfully")
    setTrainName("")
    setTrainNum("")
    setDepratureTime("")
    setarrivaltime("")
    setdate("")
    setTo("")
    setloader(true)
} else{
    message.error(res.data.message)
    console.log(res.data.message)
}
} catch (error) {
    message.error("Train is not Added")
}
finally {
    setloader(false)
}



}

    return <>

<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

 {loading ? (

    <Skeleton  active paragraph={{rows: 6}} />
    
  ) : (

    <div className="w-full max-w-4xl">

   
    <div className="mb-6 text-center">
      
  

      <h1 className="text-3xl font-bold text-gray-800">
         Add Train Schedule
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        Create and manage train departure & arrival timings
      </p>
    </div>

  
    <div className="bg-white rounded-2xl shadow-xl p-8">

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Train Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Train Name
          </label>
          <Inputfield
            type="text"
            value={TrainName}
            placeholder="e.g. Green Line Express"
            onChange={(e:any) => setTrainName(e.target.value)}
          />
        </div>

  
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Train Number
          </label>
          <Inputfield
            type="text"
            value={TrainNum}
            placeholder="e.g. 50"
            onChange={(e:any) => setTrainNum(e.target.value)}
          />
        </div>

      
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Travel Date
          </label>
          <Inputfield
            type="date"
            value={date}
            onChange={(e:any) => setdate(e.target.value)}
          />
        </div>

        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Destination (To)
          </label>
          <Inputfield
            type="text"
            value={To}
            placeholder="e.g. Lahore"
            onChange={(e:any) => setTo(e.target.value)}
          />
        </div>

        {/* Departure Time */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Departure Time
          </label>
          <Inputfield
            type="time"
            value={DepratureTime}
            onChange={(e:any) => setDepratureTime(e.target.value)}
          />
        </div>

        {/* Arrival Time */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Arrival Time
          </label>
          <Inputfield
            type="time"
            value={arrivaltime}
            onChange={(e:any) => setarrivaltime(e.target.value)}
          />
        </div>
      </div>

<div className="flex gap-[150px]">
 <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Ticket Price
          </label>
          <Inputfield
            type="number"
            value={ticketprice}
            onChange={(e:any) => setticketprice(e.target.value)}
          />
        </div>
    

<div className="flex justify-center mt-6">
  <select
    onChange={(e) => setCategory(e.target.value)}
    className="px-4 py-2 w-60 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option>Select Category</option>
    <option>BussniessClass</option>
    <option>normal</option>
  </select>
</div>

</div>

      
      {/* Action */}
      <div className="mt-8 flex justify-end">
        <Button
          disabled={loader}
          onClick={Handle}
          type="primary"
          Label={loader ? "Adding Train..." : "Add Train Schedule"}
        />

      </div>
    </div>

  </div>
  )}
</div>
  
</>
}