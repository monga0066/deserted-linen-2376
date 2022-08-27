import React from 'react'
import Junior from '../junior nav/JuniorNav'

import "./Add.css"
export default function Add() {
  return (
    <>
      <Junior/>
      <div className='junior-nav-box1'>
      <div className='junior-nav1'>
        <h2 className='junior-h2'>
          MY BAG 
          </h2>
      </div>
    </div>
    <div className='Add-main-div'>
      <div className='Add-items-div'>
{/* items mini div */}
        <div className='item-addtocart'>
          <div className='item-addtocart-img-div'>
          <img className='item-addtocart-img' src="https://cdn09.nnnow.com/web-images/large/styles/NAG35MWAZB5/1603956012732/1.jpg" alt="error" />
          </div>
          <div className='item-addtocart-info'>
            <p className='Addtocart-title'>HUDE BEAUTY</p>
            <p className='Addtocart-name'>WILD OBSESSIONS EYESHADOW PALETTE - PYTHON</p>
          <p className='Addtocart-color'>Color - Python<br/>Size - One Size</p>
          <button className='remove-item-cart'>Remove</button>
          </div>
          <div className='Addtocart-q'>
            QTY: 
            <select className='selector' name="qauntity" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
               <option value="5">5</option>
              </select>
          </div>
          <div className='cart-total-amount-div'>
            <p className='cart-total-amount'>
            Rs.  1200
            </p>
           </div>
        </div>
{/* items mini div */}
</div>

      <div className='Add-payment-div'>
        <div className='promocode'>
          <div className='promocode1'>
          <img className='promocode-img'  src="https://static.nnnow.com/client/assets/images/promotions/icon_promo.png" alt="nnnow"/>
          <span className='promocode-span'> APPLY PROMO CODE</span>

          </div>
        </div>
        <div className='pay-main-div'>
         
          <h3 className='overview'>Overview</h3>
          <div className='subtotal'>
            <span className='subtotal-span'>Subtotal</span>
            <span className='subtotal-span'>Rs.1200</span>
          </div>
          <div  className='subtotal'>
          <span className='subtotal-span charges'>Discount</span>
          <span className='subtotal-span charges'>-Rs. 0</span>
        </div>
            
          <div  className='subtotal'>
          <span className='subtotal-span'>GST</span>
          <span className='subtotal-span'>Rs. 0</span>
          </div>
          <div  className='subtotal'>
          <span className='subtotal-span'>Delivery Charges</span>
          <span className='subtotal-span'>Rs. 0</span>
          </div>
          <div  className='subtotal-total'>
          <span className='subtotal-span'>Total</span>
          <span className='subtotal-span'>Rs. 0</span>
          </div>
         </div>
         <button className='checkout'>
        checkout
      </button>
      <button className='checkout2'>
        shoping more
      </button>
        </div>
        
      </div>

      
  
    </>
  )
}
