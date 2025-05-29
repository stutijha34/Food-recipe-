import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, setCart, setOrderHistory }) {
  const navigate = useNavigate();
  const hasOrdered = useRef(false);

  useEffect(() => {
    if (cart.length > 0 && !hasOrdered.current) {
      hasOrdered.current = true;

      const normalizedCart = cart.map(item => ({
        ...item,
        quantity: item.quantity || 1,
      }));

      const newOrder = {
        id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        items: normalizedCart,
        date: new Date().toLocaleString(),
      };

      // Add Supabase API call here
      async function sendOrderToSupabase() {
        const API_URL = "https://pigzxgjqmxcnvxanfvfp.supabase.co/rest/v1/orders";
        const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpZ3p4Z2pxbXhjbnZ4YW5mdmZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1MTQ2ODMsImV4cCI6MjA2NDA5MDY4M30.mqk1LqPPNTPnDBjPyZtBnQiaJf6NpG5wcpwNAC99NRc";

        // Send each item as a separate order (or adjust per your table structure)
        for (const item of normalizedCart) {
          await fetch(API_URL, {
            method: "POST",
            headers: {
              "apikey": API_KEY,
              "Authorization": `Bearer ${API_KEY}`,
              "Content-Type": "application/json",
              "Prefer": "return=representation"
            },
            body: JSON.stringify({
              user_name: "John",  // replace with actual user if you have auth
              food_item: item.name || item.food_item, // your item name field
              quantity: item.quantity
            })
          });
        }
      }

      sendOrderToSupabase().catch(console.error);

      setOrderHistory(prevHistory => [...prevHistory, newOrder]);
      setCart([]);

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
