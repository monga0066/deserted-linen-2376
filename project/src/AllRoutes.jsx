import {Routes,Route} from "react-router-dom"
import Add from "./Add to cart/Add";
import Home from "./Home/Home";
import Login from "./Login/Login";


import Header from "./Navbar/Header";
import Navbar from "./Navbar/Navbar";
import Signup from "./Signup/Signup";
import {CartProvider} from "react-use-cart"
import Checkout from "./Checkout/Checkout";
import Thanku from "./Thanku/Thanku";


function AllRoutes() {

  return (
    <div>
      
       <Routes>
        <Route path={"/thnku"} element={<Thanku/> }></Route>
       </Routes>
     
  <CartProvider>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
       </Routes>
        <Routes>
        <Route path={"/addtocart"} element={<Add/>}></Route>
       </Routes>
       <Routes>
        <Route path={"/checkout"} element={<Checkout/> }></Route>
       </Routes>
       </CartProvider>
       
    </div>
  );
}

export default AllRoutes;
