import React from 'react'
import "./CSS/Navbar.css"
export default function Navbar() {
  return (
    <div className='main'>
      <div className='up-main'>
        <div className='up1'>
        <i class="fa-solid fa-magnifying-glass ic1"></i>
          <input type="text" placeholder='Search SEPHORA' />
        </div>
        <div className='up2'>
          <img className='up2-img'  src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" 
          alt="sephora" />
        </div>
        <div className='up3'>
          <a href="">
          <i class="fa-solid fa-heart ic1"></i>
          </a>
          <span  className='danda'>|</span>
          <a href="">
          <i class="fa-solid fa-bag-shopping ic1"></i>
          </a>
          <span className='danda'>|</span>
          <a href="">
          <i class="fa-solid fa-user ic1"></i>
            <span className='link-span'>Login</span>
          </a>
        </div>

      </div>
      <div className='down-main'>
        <div>
          <a className='tab' href="#">SALE</a>
         </div>
        <div>
        <a className='tab' href="#">MAKEUP</a>

        </div>
        <div>
        <a className='tab' href="#">SKINCARE</a>

        </div>
        <div>
        <a className='tab' href="#">FRAGRANCE</a>

        </div>
        <div>
        <a className='tab' href="#">HAIRCARE</a>

        </div>
        <div>
        <a className='tab' href="#">TOOL & BRUSHES</a>

        </div>
        <div>
        <a className='tab' href="#">BRANDS</a>

        </div>

      </div>

    </div>
  )
}
