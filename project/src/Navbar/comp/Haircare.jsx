import React,{useState} from 'react'
import "../CSS/skin.css"
export default function Hair() {
  const[data,setdata]=useState(false)

  const dropdownshow=()=>{
    setdata(true)
  }
  const dropdownhide=()=>{
    setdata(false)
  }
  return (
    <div className='sale-main'>
      <div className='sale-main-word' onMouseEnter={dropdownshow} onMouseLeave={dropdownhide}>
      <a className='tab' href="#">HAIRCARE</a>

      {data ?(<div className='dropdown-hair' onMouseEnter={dropdownshow}>
      
       <div className='dropdown-div'>
       <p className='drop-h5'>FACE</p>
       <p className='drop-p'>Foundation</p>
       <p className='drop-p'>BB & CC Cream</p>
       <p className='drop-p'>Concealer</p>
       <p className='drop-p'>Face Primer</p>
       <p className='drop-p'>Highlighter</p>
       <p className='drop-p'>Face Brushes</p>
       <p className='drop-p'>Makeup Palette</p>
       </div>
       <div className='dropdown-div'>
       <p className='drop-h5'>FACE</p>
       <p className='drop-p'>Foundation</p>
       <p className='drop-p'>BB & CC Cream</p>
       <p className='drop-p'>Concealer</p>
       <p className='drop-p'>Face Primer</p>
       <p className='drop-p'>Highlighter</p>
       <p className='drop-p'>Face Brushes</p>
       <p className='drop-p'>Makeup Palette</p>
       </div>
       <div className='dropdown-div'>
       <p className='drop-h5'>FACE</p>
       <p className='drop-p'>Foundation</p>
       <p className='drop-p'>BB & CC Cream</p>
       <p className='drop-p'>Concealer</p>
       <p className='drop-p'>Face Primer</p>
       <p className='drop-p'>Highlighter</p>
       <p className='drop-p'>Face Brushes</p>
       <p className='drop-p'>Makeup Palette</p>
       </div>
       <div className='dropdown-div'>
       <p className='drop-h5'>FACE</p>
       <p className='drop-p'>Foundation</p>
       <p className='drop-p'>BB & CC Cream</p>
       <p className='drop-p'>Concealer</p>
       <p className='drop-p'>Face Primer</p>
       <p className='drop-p'>Highlighter</p>
       <p className='drop-p'>Face Brushes</p>
       <p className='drop-p'>Makeup Palette</p>
       </div>
       <div className='dropdown-div'>
       <p className='drop-h5'>FACE</p>
       <p className='drop-p'>Foundation</p>
       <p className='drop-p'>BB & CC Cream</p>
       <p className='drop-p'>Concealer</p>
       <p className='drop-p'>Face Primer</p>
       <p className='drop-p'>Highlighter</p>
       <p className='drop-p'>Face Brushes</p>
       <p className='drop-p'>Makeup Palette</p>
       </div>
       <div className='dropdown-div'>
       <p className='drop-h5'>FACE</p>
       <p className='drop-p'>Foundation</p>
       <p className='drop-p'>BB & CC Cream</p>
       <p className='drop-p'>Concealer</p>
       <p className='drop-p'>Face Primer</p>
       <p className='drop-p'>Highlighter</p>
       <p className='drop-p'>Face Brushes</p>
       <p className='drop-p'>Makeup Palette</p>
       </div>
       
      </div>):null}

      </div>
    </div>
  )
}
 