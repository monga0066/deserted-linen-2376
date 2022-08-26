import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home";


import Header from "./Navbar/Header";
import Navbar from "./Navbar/Navbar";



function AllRoutes() {

  return (
    <div>
      <Header/>
      <Navbar/>
      
<Home/>
    </div>
  );
}

export default AllRoutes;
