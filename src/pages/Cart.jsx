import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cart }) {
  const navigate = useNavigate();

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {/* Display Cart Items */}
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.strMealThumb} alt={item.strMeal} className="cart-item-img" />
              <div className="cart-item-details">
                <h2>{item.strMeal}</h2>
                <p>{item.strInstructions?.slice(0, 100)}...</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total Price */}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
