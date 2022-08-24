import React from 'react'
import "./CSS/Header.css"
export default function Header() {
  return (
    
      <div className='coupn-head'>
        <div className='coupn-head-1'>
        <img className='ninow-pic'
         src="https://cdn02.nnnow.com/web-images/master/navtree_metaData/59b2425ae4b0d70964ee66e0/1505806763887/12NNNOWLOGODESKTOP.png"
          alt="NINOW" /> 
       
        <div className='coupn-head-12'>
        <span className='danda'>|</span>
        <a href='#' className='icon-link'>
        <i  className="fa-solid fa-location-dot ic"></i>
        <span className='link-span'>Store Locator</span>
        </a>
        </div>
        </div>
       
        <div className='coupn-head-2'>
        <i  className="fa-solid fa-star star"></i>
        <i  className="fa-solid fa-star star1"></i>
        <i  className="fa-solid fa-star star2"></i>
        <div className='get'>
        <span className="get10%">Get 10% OFF on your first purchase. Use Code: <br /> BEAUTY10</span>
        </div>
        <i className="fa-solid fa-star  star"></i>
        <i  className="fa-solid fa-star star1"></i>
        <i  className="fa-solid fa-star star2"></i>
        </div>
        <div className='coupn-head-3'>
          <a className='icon-link' href="#">
          <i className="fa-solid fa-calendar ic"></i>
            <span className='link-span'>Get App</span>
            </a>
          <span className='danda'>|</span>
          <a className='icon-link' href="#">
          <i  className="fa-solid fa-box-archive ic"></i>
            <span className='link-span'>Track Order</span>
            </a>
          <span className='danda'>|</span>
          <a className='icon-link' href="#">
          <i  className="fa-solid fa-trophy ic"></i>
            <span className='link-span'>Loyalty</span>
            </a>
          
        </div>
      </div>
    
  )
}
