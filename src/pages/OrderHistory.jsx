import React from 'react';

function OrderHistory({ orderHistory }) {
  const downloadCSV = () => {
    if (!orderHistory.length) {
      alert('No orders to export');
      return;
    }

    let csv = 'OrderID,Date,Meal,Quantity,Price,Total\n';

    orderHistory.forEach(order => {
      order.items.forEach(item => {
        const quantity = item.quantity || 1;
        const total = item.price * quantity;
        csv += `${order.id},${order.date},${item.strMeal},${quantity},${item.price},${total}\n`;
      });
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'order_history.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="order-history">
      <h1>Order History</h1>
      {orderHistory.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <>
          <button onClick={downloadCSV} style={{ marginBottom: '20px' }}>
            Export Order History to CSV
          </button>
          {orderHistory.map(order => (
            <div key={order.id} className="order">
              <h3>Order on {order.date}</h3>
              {order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <img src={item.strMealThumb} alt={item.strMeal} width={80} />
                  <span>
                    {item.strMeal} x {item.quantity || 1} —{' '}
                    <strong>${(item.price * (item.quantity || 1)).toFixed(2)}</strong>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default OrderHistory;
