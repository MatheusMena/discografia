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

      <h1 className='title'>Discografia</h1>

    </header>
</nav>
  )
}
