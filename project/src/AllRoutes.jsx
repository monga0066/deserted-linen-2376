import {Routes,Route} from "react-router-dom"
import Add from "./Add to cart/Add";
import Home from "./Home/Home";
import Login from "./Login/Login";


import Header from "./Navbar/Header";
import Navbar from "./Navbar/Navbar";
import Signup from "./Signup/Signup";



function AllRoutes() {

  return (
    <div>
      
      
  
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
       </Routes>
       
       <Routes>
        <Route path={"/signup"} element={<Signup/>}></Route>
       </Routes>

       <Routes>
        <Route path={"/addtocart"} element={<Add/>}></Route>
       </Routes>
      
    </div>
  );
}

export default AllRoutes;
