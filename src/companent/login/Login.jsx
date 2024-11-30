import React, {useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  
  const condition = {
    username: "admin",
    password: "kaa"
  }

  const handleuername = (e) => {
       setusername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handlelogin= () => {
      if ( condition.username===username && condition.password===password) {
        
    //  alert("sucess password")

        navigate("/Home1")

        
      }

      else
      {alert("try again")

      }

  }
  return (
    <div>
       <form onSubmit={handlelogin}>
            <h2>Login</h2>
            
            
        <div className='input'>
            <label className='username '>User name</label><br />
           

            <input type="text" placeholder='Enter your username' className='input1 ' onChange={handleuername} value={username} />

            
           
        </div>

        <div>
        <label className='password'>Password</label><br />
        

        <input type="text" onChange={handlePassword} placeholder='Enter your password' className='input2'  />
       
        </div><br />

          <div className='buttton0'><button className='button' type='submit '>Login</button></div> 
         
         
          

            <div className='fotter'>
            <a href="" className='a1'>ForgotPassword?</a>
            <a href="" className='a2'>RegisterHere</a>
            
           
            
            </div>
</form>
        </div>

     
    
  )
}

export default Login