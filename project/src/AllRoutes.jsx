import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home";
import Login from "./Login/Login";


import Header from "./Navbar/Header";
import Navbar from "./Navbar/Navbar";



function AllRoutes() {

  return (
    <div>
      
      <Header/>
      <Navbar/>
       <Home/> 
        <Routes>
       <Route path={"/login"} element={<Login/>}></Route>
       </Routes>
    </div>
  );
}

export default AllRoutes;
