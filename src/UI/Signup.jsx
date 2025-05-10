import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

function Signup() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const {login}=useAuth();
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
        e.preventDefault();
    if(username==='user'&& password==='12345'){
        navigate('/dashboard');
    }
    else{
        alert('invalid credentials')
    }
    }
  return (
    <div className="signup-page">
        <div className="form-container">
            <h1 className="logo">Food Zone</h1>
            <form onSubmit={handlesubmit}>
                <input type='text' placeholder='username'required value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                ></input>
                <input type='password'placeholder='password'required
                value={password} onChange={(e)=>setPassword(e.target.value)}
                ></input>
                <button type='submit'>Signup</button>
            </form>
        </div>
    </div>
  )
}

export default Signup