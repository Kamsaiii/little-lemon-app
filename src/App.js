import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './Main';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemName) => {
    setCart(cart.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item =>
      item.name === itemName
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Nav cartItems={cart} />
      <Routes>
        <Route path="/*" element={<Main addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/checkout" element={<Checkout cartItems={cart} clearCart={clearCart} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
