import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './UI/Signup';
import Dashboard from './UI/Dashboard';
import { AuthProvider } from './UI/AuthContext';
import Frontpage from './UI/Frontpage';
import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderHistory from './pages/OrderHistory';

function App() {
  const [cart, setCart] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  // ✅ Load order history from localStorage on app load
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('orderHistory'));
    if (savedHistory) setOrderHistory(savedHistory);
  }, []);

  // ✅ Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [orderHistory]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/order-history" element={<OrderHistory orderHistory={orderHistory} />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                setCart={setCart}
                orderHistory={orderHistory}
                setOrderHistory={setOrderHistory}
              />
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
