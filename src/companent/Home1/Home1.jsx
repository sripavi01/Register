
import React from 'react'
import "./Home1.css"
import { useNavigate } from 'react-router-dom'
// import { AmazonOutlined } from '@ant-design/icons'

import { Navigate } from 'react-router-dom'

const Navigatebar = () => {


  const navigate = useNavigate();
  
const navigatelogin =() => {
 
navigate("/Login")
}

  return (
    <div className='navbar' >
    <ul className='navbarlist'>
    {/* <div ><p><AmazonOutlined  className='icon' /> </p></div> */}
    
        <div className="li">Home</div>
        <div className="li">About</div>
        <div className="li">Contact</div>
        <div className="li"><button className='button' onClick={navigatelogin} > Login </button></div>
       
    </ul>
      

    </div>
  )
}



export default Navigatebar