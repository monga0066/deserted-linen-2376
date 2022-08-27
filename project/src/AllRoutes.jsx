import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home";
import Login from "./Login/Login";


import Header from "./Navbar/Header";
import Navbar from "./Navbar/Navbar";
import Signup from "./Signup/Signup";



function AllRoutes() {

  return (
    <div>
      
      <Header/>
      <Navbar/>
       <Home/> 
        <Routes>
       <Route path={"/signup"} element={<Signup/>}></Route>
       </Routes>
    </div>
  );
}

export default AllRoutes;
