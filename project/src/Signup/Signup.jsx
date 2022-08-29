import React,{useState} from 'react'
import{useForm} from "react-hook-form"
import "./signup.css"
export default function Signup() {
  const[modal,setmodal]=useState(false)
  const{register,handleSubmit,formState:{errors}}=useForm()
  const Moved=()=>{
    alert("Your Account is Create Successfuly !!")
    setmodal(!modal)

  }
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
      <span className='link-span' onClick={openlogin}>Create</span>
      {modal && (

     <form onSubmit={handleSubmit(onSubmit)}>
      <div className='modal'>
      <div onClick={openlogin} className='overlay'></div>
      <div className="modal-content">
      <h1 className='login-h1'>Create <br />Account</h1>
      <div className='input-div'>
        <label className='login-label' htmlFor="Name">Name*</label>
        <br />
        <input className='email-input' type="name" {...register("name",{required:"Name* is Requried"})} id=""  />
      </div>
      {errors.name && ( <p className='waring'>Name* is Requried</p>)}
     
      <div className='input-div'>
        <label className='login-label' htmlFor="email">Email*</label>
        <br />
        <input className='email-input' type="email" {...register("email",{required:"Email is Requried"})} id="" />
      </div>
      {errors.email && ( <p className='waring'>Email* is Requried</p>)}

      <div className='input-div'>
        <label className='login-label' htmlFor="email">Password*</label>
        <br />
        <input className='email-input' type="Password" {...register("password",{required:"Password is Requried"})} id=""  />
      </div>
      {errors.password && ( <p className='waring'>Password* is Requried</p>)}
{/* 
      <div className='input-div'>
        <label className='login-label' htmlFor="email">Phone Number**</label>
        <br />
        <input className='email-input' type="number" {...register("number",{required:"Number is Requried"})} id="" />
      </div>
      {errors.number && ( <p className='waring'>Number* is Requried</p>)} */}
      
      <div className='btn-login'>
        <button onClick={Moved} className='login'>
          CONTINUE
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
