import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Specials from './components/Specials';
import CustomersSay from './components/CustomersSay';
import Chicago from './components/Chicago';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Specials />
      <CustomersSay />
      <Chicago />
      <Footer />
    </>
  );
}

export default App;