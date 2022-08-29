import React from 'react'
import "./item.css"
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Item(
  props) {

    const {addItem}=useCart()
    const Addoo=()=>{
      addItem(props.e)
      
      toast.success("Product added to cart",{
        position:"top-center"
      });
    }
  return (
    <>
     
     
      
        <div className='product1'>
          <div className='img-box-product'>
          <img className='product-img' src={props.img} alt="" />
         </div>
         {/* <button onClick={()=>{addItem(props.e)}} className='add-cart'> */}
          <button onClick={Addoo} className='add-cart'> 
          <ToastContainer />
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
