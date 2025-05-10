import React from 'react'
import { useNavigate } from 'react-router-dom'


function Frontpage() {
  const navigate=useNavigate();
  return (
    <div className="frontpage">
    <img
      src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
      alt="Food"
      className="background-image"
    />
    <div className="overlay">
        <h1 className="main-heading">Welcome to Food Zone</h1>
        <p className="tagline">Deliciousness jumping into the mouth!</p>
        <button onClick={() => navigate('/signup')}>Get Started</button>
    </div>
</div>
  )
}

export default Frontpage