import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Movies from "./components/Movies/Movies";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import axios from "axios";
import { useSelector } from "react-redux";
import Booking from "./components/Bookings/Booking";
import UseProfile from "./profile/UseProfile";
import AddMovie from "./components/Movies/AddMovie";
import AdminProfile from "./profile/AdminProfile";
axios.defaults.baseURL = "http://localhost:5000";

function App() {


  const isAdminLoggedIn =  useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn =  useSelector((state) => state.user.isLoggedIn);
  // console.log("isAdminLoggedIn" , isAdminLoggedIn);
  //  console.log("isUserLoggedIn :" ,  isUserLoggedIn);
  
  return (
    <div >
   <Header/>
   <section>
    <Routes>
     <Route path="/" element = {<Homepage/>} />
     <Route path="/movies" element = {<Movies/>} />
 {!isAdminLoggedIn && !isUserLoggedIn && (
             <>
              <Route path="/admin" element = {<Admin/>} />
              <Route path="/auth" element = {<Auth/>} />
              </>
            )
            }
    
   {isUserLoggedIn  && !isAdminLoggedIn && (
    <>
     <Route path="/user" element = {<UseProfile/>} />
     <Route path="/booking/:id" element = {<Booking/>} />
     </>
    )
    }
    {isAdminLoggedIn && !isUserLoggedIn && (
      <>
       <Route path="/adminProfile" element = {<AdminProfile/>} />
       <Route path="/add" element = {<AddMovie/>} />
      
      </>
    )
    }
    
    
    </Routes>
   </section>
    </div>
  );
}

export default App;
