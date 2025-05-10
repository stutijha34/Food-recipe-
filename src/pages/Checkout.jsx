import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart, setCart, orderHistory, setOrderHistory }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length > 0) {
      const newOrder = {
        id: Date.now(), // unique ID for the order
        items: cart,
        date: new Date().toLocaleString(),
      };

      setOrderHistory([...orderHistory, newOrder]);
      setCart([]); // clear the cart after placing the order
    }
  }, []);

  return (
    <div className="checkout-page">
      <h1>Checkout Successful</h1>
      <p>Your order has been placed!</p>
      <button onClick={() => navigate('/order-history')}>View Order History</button>
    </div>
  );
}

export default Checkout;
