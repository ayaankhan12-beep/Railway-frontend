










import { useState, useEffect,type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Skeleton } from "antd";

interface Props {
  children: ReactNode;
}

export default function AdminProtectedRoute({ children }: Props) {
    
  const [auth, setAuth] = useState<boolean | null>(null);



  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get("https://railway-backend-production-9329.up.railway.app/checkAuth", {
          withCredentials: true,
        });

        if (res.data.isAuthenticated && res.data.user.role === "Admin") {
          setAuth(true);
        
          
          
          console.log(res.data)
        } else {
          setAuth(false);
        }

      } catch {
        setAuth(false);
      }
    };

    checkAdmin();
  }, []);

  if (auth === null) return
   <div>

        <Skeleton active  paragraph={{rows: 6}}/>
    
  
  </div>;
  


  if (!auth) return <Navigate to="/login" replace />;

  return <>{children}</>;
}