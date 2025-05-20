import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, setCart, setOrderHistory }) {
  const navigate = useNavigate();
  const hasOrdered = useRef(false); // ✅ track if order was already placed

  useEffect(() => {
    if (cart.length > 0 && !hasOrdered.current) {
      hasOrdered.current = true; // ✅ prevent double order

      const normalizedCart = cart.map(item => ({
        ...item,
        quantity: item.quantity || 1,
      }));

      const newOrder = {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        items: normalizedCart,
        date: new Date().toLocaleString(),
      };

      setOrderHistory(prevHistory => [...prevHistory, newOrder]);
      setCart([]);
       // ✅ Immediately persist to localStorage
      const prevOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
      localStorage.setItem('orderHistory', JSON.stringify([...prevOrders, newOrder]));
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, [cart, setCart, setOrderHistory]);
  

  return (
    <div className="checkout-page">
      <h1>Checkout Successful</h1>
      <p>Your order has been placed!</p>
      <button onClick={() => navigate('/order-history')}>View Order History</button>
    </div>
  );
}

export default Checkout;
