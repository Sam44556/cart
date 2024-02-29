import React, { useState } from "react";

import './App.css';

function App() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
  
    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleQuantityChange = (e) => {
      setQuantity(parseInt(e.target.value));
    };
  
    const handlePriceChange = (e) => {
      setPrice(parseFloat(e.target.value));
    };
  
    const handleAddToCart = (e) => {
      e.preventDefault();
      const newItem = { name, quantity, price };
      setItems([...items, newItem]);
      setName("");
      setQuantity(0);
      setPrice(0);
    };
  
    const calculateTotalPrice = () => {
      return items.reduce((total, item) => total + item.quantity * item.price, 0);
    };
  
    return (
      <div className="shopping-cart-container">
        <h1>Shopping Cart</h1>
        <div className="form-container">
          <form onSubmit={handleAddToCart}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </label>
            <br />
            <label>
              Price:
              <input type="number" value={price} onChange={handlePriceChange} />
            </label>
            <br />
            <button type="submit">Add to Cart</button>
          </form>
        </div>
        <div className="cart-section">
          <h2>Cart</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Price: {calculateTotalPrice()}</h3>
        </div>
      </div>
    );
  };

export default App;
