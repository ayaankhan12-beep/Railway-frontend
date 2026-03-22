
import axios from "axios";
import { useEffect, useState, type ReactNode } from "react";
import { Navigate } from "react-router-dom";




interface Props {
  children: ReactNode
}

export default function ProtectedRoute({children}: Props) {
const [auth , setAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth =  async() => {
      try {
        const res = await axios.get("https://railway-backend-production-9329.up.railway.app/checkAuth" ,
      {withCredentials: true}
    );
   setAuth (res.data.isAuthenticated) 


    
      } catch (error) {
        setAuth(false)
      }
    }
    checkAuth()

    
  } , [])

  if(auth === null) return <div>loading</div>
    if(!auth) return <Navigate to="/login" replace />
return <>{children}</>
}