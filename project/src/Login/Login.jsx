import React,{useState} from 'react'
import{useForm} from "react-hook-form"

import "./Login.css"
export default function Login() {
  const[modal,setmodal]=useState(false)
  
  
  
  const{register,handleSubmit,formState:{errors}}=useForm()
  
  const openlogin=()=>{
    setmodal(!modal)
  }
  const onSubmit=(data)=>{
    console.log(data)
  }
  if(modal){
    document.body.classList.add("active-modal")
  } else{
    document.body.classList.remove("active-modal")

  }
 
  return (
    <>
      <span onClick={openlogin}>Login</span>
      {modal && (

     <form onSubmit={handleSubmit(onSubmit)} >
      <div className='modal'>
      <div onClick={openlogin} className='overlay'>
</div>

      <div className="modal-content">
      <h1 className='login-h1'>LOGIN</h1>
      <div className='input-div'>
        <label className='login-label' htmlFor="email">Enter your Phone / Email</label>
        <br />
        <input className='email-input' type="email" {...register("email",{required:"Email is Requried"})}  />
      </div>
      {errors.email && ( <p className='waring'>Email* is Requried</p>)}

      <div className='input-div'>
        <label className='login-label' htmlFor="email">Enter Password</label>
        <br />
        <input className='email-input' type="Password" {...register("password",{required:"Password is Requried"})}   />
      </div>
      {errors.password && ( <p className='waring'>Password* is Requried</p>)}

      <div className='btn-login'>
        <button className='login'>
          CONTINUE
        </button>
      </div>
<p className='or'>LOGIN <span className='span-or'> WITH</span> </p>
      
      <div className='btn-google'>
        <button className='google'>
        <img className='logo-fab' src="https://static.nnnow.com/google-social-login.svg" alt="google sign-in"/>
                    Continue with Google
        </button>
      </div>
      <div className='btn-facebook'>
        <button className='facebook'>
        <img className="logo-fab" src="https://static.nnnow.com/facebook.png" alt="facebook sign-in"/>
        Continue with Facebook
        </button>
      </div>
      <div className='login-footer'>
<p className='login-p'>By proceeding, you agree to <span className='login-span'> Privacy Policy, Terms & Conditions</span> </p>
<span onClick={openlogin} className='close-modal'>
<i className="fa-solid fa-xmark"></i>
</span>
      </div>
    </div>
</div>
</form>
 )}
 



    </>
  )
}
