import React from 'react'
import logo from "../../assets/logo.png"
import "./navBar.css"
export default function Navbar() {
  return (
    <nav> 
    <header className='navbar'>
    
      <div class="logo">
        <img alt="" src={logo} className='logo' />
      </div>

      <p className='title'>Discografia</p>

    </header>
</nav>
  )
}
