import './login.css'
import { Room,Cancel } from '@material-ui/icons'
import { useState } from 'react'
import { useRef } from 'react';
import axios from 'axios';

function Login({setShowLogin,myStorage,setCurrentUser}) {
  const [showError,setShowError]=useState(false);
  const usernameRef=useRef();
  const passwordRef=useRef();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const user={
      username:usernameRef.current.value,
      password:passwordRef.current.value
    }

    try {
      const res=await axios.post('/users/login',user)
      myStorage.setItem("user",res.data.username)
      setCurrentUser(res.data.username);
      setShowError(false);
      setShowLogin(false);
      
    } catch (err) {
      setShowError(true);
    }
  }

  return (
    <div className='loginContainer' >
      <div className="logo">
        <Room></Room>MappApp
      </div>
      
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder='username' ref={usernameRef}/>
        <input type="password" placeholder='password' ref={passwordRef} />
        <button className='loginBtn'>Login</button>
      </form>

      {showError &&(<span className='failure'>Something went wrong!</span>)}
      <Cancel className='cancelBtn' onClick={()=>setShowLogin(false)}/>
    </div>
  )
}

export default Login