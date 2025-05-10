// pages/OrderHistory.jsx
import React from 'react';

function OrderHistory({ orderHistory }) {
  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orderHistory.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        orderHistory.map(order => (
          <div key={order.id} className="order">
            <h3>Order on {order.date}</h3>
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <img src={item.strMealThumb} alt={item.strMeal} width={80} />
                <span>{item.strMeal}</span> - <strong>${item.price}</strong>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default OrderHistory;
