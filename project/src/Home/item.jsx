import React from 'react'
import "./item.css"


export default function Item({
  img,
  title,
  name,
  price,
  offer}) {
  return (
    <>
     
     
      
        <div className='product1'>
          <div className='img-box-product'>
          <img className='product-img' src={img} alt="" />
         </div>
         <button className='add-cart'>
         <i className="fa-solid fa-bag-shopping"></i> Shop <br />NNNOW</button>
          <div>
         <h3 className='offer-word'> <i class="fa-solid fa-tags"></i> OFFER</h3>
          </div>
          
<h3 className='product-title'>{title}</h3>
<p className='product-name'>{name}</p>
<h3 className='product-price'>{price}</h3>
<p className='product-offer'>{offer}</p>
        </div>
        
    
      </>
    
  )
}
