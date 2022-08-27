import React from 'react'
import "./item.css"
import { useCart } from 'react-use-cart'

export default function Item(
  props) {

    const {addItem}=useCart()
  return (
    <>
     
     
      
        <div className='product1'>
          <div className='img-box-product'>
          <img className='product-img' src={props.img} alt="" />
         </div>
         <button onClick={()=>{addItem(props.e)}} className='add-cart'>
         <i className="fa-solid fa-bag-shopping"></i> Shop <br />NNNOW</button>
          <div>
         <h3 className='offer-word'> <i className="fa-solid fa-tags"></i> OFFER</h3>
          </div>
          
<h3 className='product-title'>{props.title}</h3>
<p className='product-name'>{props.name}</p>
<h3 className='product-price'>Rs. {props.price}</h3>
<p className='product-offer'>{props.offer}</p>
        </div>
        
    
      </>
    
  )
}
