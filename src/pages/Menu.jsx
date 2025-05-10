// import { SetMealTwoTone } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({ cart, setCart }) {
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [menuItems, setMenuItems] = useState([]);

  const categories = ['Seafood', 'Beef', 'Chicken', 'Dessert', 'Vegetarian'];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          // Add a random price to each meal item
          const itemsWithPrice = data.meals.map((meal) => ({
            ...meal,
            price: Math.floor(Math.random() * 500) + 100,
          }));
          setMenuItems(itemsWithPrice);
        }
      })
      .catch((error) => {
        console.log('error fetching the model', error);
      });
  }, [category]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="menu-page">
      <h1>{category} Menu</h1>

      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.idMeal} className="menu-item">
            <img src={item.strMealThumb} alt={item.strMeal} className="menu-item-img" />
            <h2>{item.strMeal}</h2>
            <p>{item.strInstructions?.slice(0, 100)}...</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-info">
        <button onClick={() => navigate('/cart')}>Go to Cart ({cart.length})</button>
      </div>
    </div>
  );
}



export default Menu;
