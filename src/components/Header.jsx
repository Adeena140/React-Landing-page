import React from 'react'
import './Header.css'

const Header = () => {
  return (
   <header className='header'>
      <h1 className='logo'>🍰 Sweet Bakery</h1>

      <nav className='nav-links'>
        <a href="#home">Home</a>
        <a href="#About">About</a>
        <a href="#Menu">Menu</a>
        <a href="#Contact">Contact</a>
      </nav>

      <button className='order-btn'>Order Now</button>
   </header>
  )
}

export default Header
