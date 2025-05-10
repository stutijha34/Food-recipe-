import React from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom'; 


function Dashboard() {
    const {logout}=useAuth();
    const navigate = useNavigate(); 
  const handleLogout = () => {
    logout(); // Log the user out
    navigate('/'); // Redirect to signup page
  };
  return (
    <div>
        <Navbar/>
        <h2  style={{ textAlign: 'center', marginTop: '40px' }}>Food Zone</h2>
        <button onClick={handleLogout} style={{ display: 'block', margin: '0 auto' }}>
        Logout
      </button>

    </div>
  )
}

export default Dashboard