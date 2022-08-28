import React from 'react'
import France from './comp/france'
import Hair from './comp/Haircare'
import Makeup from './comp/Makeup'
import Skincare from './comp/Skincare'
import Tooth from './comp/Tooth'
import "./CSS/Navbar.css"
import {Link} from "react-router-dom"
import Login from '../Login/Login'
import Signup from '../Signup/Signup'



export default function Navbar() {
  

  return (
    <div className='main'>
            

      <div className='up-main'>
        <div className='up1'>
        <i className="fa-solid fa-magnifying-glass ic1"></i>
          <input type="text" placeholder='Search SEPHORA' />
        </div>
        <div className='up2'>
          <img className='up2-img'  src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" 
          alt="sephora" />
        </div>
        <div className='up3'>
          <a href="">
          <i className="fa-solid fa-heart ic1"></i>
          </a>
          <span  className='danda'>|</span>
          <a href="">
            <Link to="/addtocart">
            <i className="fa-solid fa-bag-shopping ic1"></i>

           </Link>
          </a>
          <span className='danda'>|</span>
          <span className='icon-link'>
          <i className="fa-solid fa-user ic1"></i>
          {/* <Link to="/login">
          <span className='link-span'>Login</span>

          </Link> */}
           <Login/> 
          {/* <span className='link-span'>Login</span> */}
             {/* <Signup/> */}
          </span>
          <span className='danda'>|</span>
          <i className="fa-solid fa-user ic1"></i>
          <Signup/>

        </div>

      </div>
      <div className='down-main'>
        <div>
        <a className='tab' href="#">SALE</a>
         </div>
        <div>
       <Makeup/>
        </div>
        <div>
     <Skincare/>
       </div>
        <div>
        <France/>

        </div>
        <div>
        <Hair/>

        </div>
        <div>
        <Tooth/>

        </div>
        <div>
        <a className='tab' href="#">BRANDS</a>

        </div>

      </div>

    </div>
  )
}
