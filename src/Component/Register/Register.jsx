import React from 'react'
import "./Register.css"
import { FacebookOutlined , InstagramOutlined , GoogleOutlined , AppleOutlined   } from '@ant-design/icons';
import { IoMdPerson } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa"
const Register = () => {
  return (
    <div>
      <div className='main-div'>
       
       
        <form>
        <h2>Sign Up</h2>
        
        <h3>Register With</h3>
        <div className='other'>
          <AppleOutlined />
          <GoogleOutlined />
          <InstagramOutlined />
          <FacebookOutlined />
        </div>
        <hr />                     
        <div className='name-div'>
           
            <div className='first-name'>
                <label>First Name</label>
                <div className='icon1'>
                <IoMdPerson className="icon-style"/>
                <input 
                type='text'
                placeholder='First Name'
                />
                </div>
            </div>

            <div className='last-name'>
                <label>Last Name</label>
                <div className='icon1'>
                <IoMdPerson className="icon-style"/>
                <input 
                type='text'
                placeholder='Last Name'/>
                </div>

            </div>

        </div>
        <div className='email'>
            <label>Email</label>
            <div className='icon'>
            <IoMail className="icon-style"/>
            <input
            type='email'
            placeholder='Email'/>
</div>
        </div>
        <div className='password'>
            <label>Password</label>
            <div className='icon'>
            <FaLock className="icon-style"/>
            <input 
            type='password'
            placeholder='Password'/>
            </div>
        </div>
        <div className='phonenumber'>
            <label>Phone Number</label>
            <div className='icon'>
            <FaPhoneAlt className="icon-style"/>
            <input 
            type='integer'
            placeholder='Phonenumber' />
            </div>
        </div>
        <hr />
        </form>
      <div className='last'>
        <button>Sign Up</button>
        <h4>Already Have an Account?</h4>
        <button>Log In</button>
        </div>
      </div>
     
    </div>
  )
}

export default Register
