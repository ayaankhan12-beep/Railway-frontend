import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import Home from "./pages/home";
import Booking from "./user pages/booking";
import Dashboard from "./Managementpages/dashboard";
import Addtrain from "./Managementpages/addtrain"
import Schedule from "./Managementpages/schedule"
import Userschedule from "./user pages/userSchedule";
import VerifyOtp from "./pages/verifyOtp"
import Contact from "./pages/contact";
import Services from "./pages/service";
import Notfound from "./pages/notfound";
import ProtectedRoute from "./Components/protectedRoute";
import AdminProtectedRoute from "./Components/adminprotected";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
           <Route path="/verifyOtp/:userId" element={<VerifyOtp />}/>


        <Route path="/" element={
        
          <Home />
        
          
          } />
                <Route path="/contact" element={
                  
                  <Contact/>
              
                  } />
                     <Route path="/service" element={
                    
                      <Services/>
              
                      
                      } />
                 <Route path="*" element={<Notfound/>} />
 

   

        <Route path="/booking/:trainId" element={<Booking />} />
       

        <Route path="/userSchedule" element={
          <ProtectedRoute>
          <Userschedule />
          </ProtectedRoute>
          
          }/>
          


        
        <Route path="/dashboard" element={
          <AdminProtectedRoute>
          <Dashboard />
          </AdminProtectedRoute>
          }>
          <Route path="addtrain" element={<Addtrain />} />
             <Route path="schedule" element={<Schedule />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}