import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import CustomersSay from './components/CustomersSay';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <CustomersSay />
      <Footer />
    </>
  );
}

export default App;