import { message, Skeleton} from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Userschedule() {
    const navigate = useNavigate()


    const [User , setUser] = useState<any[]>([])
    const [loading , setloading ] = useState(true)

    const [count , setcount] = useState(1)

  
    

    const getSchedule = async () =>  {
    
try {

    const res = await axios.get("http://localhost:4000/api/getTrain")
    
    setUser(res.data.data)
    setloading(false)
    console.log(res.data.data)

    
} catch (error) {
    message.error("Schedule is not set")
}  
    }
    useEffect(() => {
        getSchedule()

    
        } , [])

        useEffect(() => {
            if(User.length > 0){
                setcount(User.length)
            }
        } , [User])

        const skeletonrows = User.length || count

    const formatDate = (DateStr: any) => {
        const date = new Date(DateStr)

        return date.toLocaleDateString("en-GB" , {
            day: "numeric",
            month: "long",
           year:"numeric"

        })
    }

    const formatTime = (TimeStr: any)=> {
        const [hours , minutes] = TimeStr.split(":")

        const date = new Date()
        date.setHours(Number(hours) , Number(minutes))

        return date.toLocaleTimeString("en-US" , {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        })
    
    }

    return <>
    

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
          <th className="px-6 py-3 text-left">ticketprice</th>
      <th className="px-6 py-3 text-left">Category</th>



                <th className="px-6 py-3 text-left">Booking</th>


      </tr>
    </thead>

<tbody>
    {loading ? (
        Array.from({length: skeletonrows}).map((_,i) => (
            <tr key={i} className="border-b">
                {Array.from({length:9}).map((_, j) => (
                    <td key={j} className="px-6 py-4">

                        <Skeleton active paragraph={false}/>
                    </td>
                ))}
    

            </tr>
        ))
    ):

    User.length === 0 ? (
<tr>
    <td  className="text-center py-6 text-gray-500 ">No Trains found</td>

</tr>
) : (
    User.map((t:any , i:any) =>(

        <tr className="border-b hover:bg-slate-100 transition"
         key={i} >

         <td className="px-6 py-4">{t.TrainName}</td>
            <td className="px-6 py-4">{t.TrainNum}</td>
            <td className="px-6 py-4">{formatTime (t.DepratureTime)}</td>
            <td className="px-6 py-4">{formatTime(t.arrivaltime)}</td>
            <td className="px-6 py-4">{formatDate(t.date)}</td>
            <td className="px-6 py-4">{t.To}</td>
               <td className="px-6 py-4">{t.ticketprice}</td>
               <td className="px-6 py-4">{t.Category}</td>



             <button onClick={() => navigate(`/booking/${t._id}`)}
             className="bg-blue-300 cursor-pointer  w-[100px] h-[30px] rounded-md mt-4 text-white font-semibold">Book Tickets</button>


            
         </tr>
    ))
)}


</tbody>
</table>
        

</div>
    

 
    
    </>



}





