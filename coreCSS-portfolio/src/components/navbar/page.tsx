
import React from 'react'
import Link from 'next/link'
import "../../style/navbar.css"


const Navbar = () => {
  return (
    <div>
  <div className="header-container">
    <div className="header-content">
      <div className="logo">
        Sahiba<span>REHMAT</span>
      </div>
      <div className="nav-links">
        <Link href="#about-sec" className="nav-link">About</Link>
        <Link href="#skills" className="nav-link">Skills</Link>
        <Link href="#Contact" className="nav-link">Contact</Link>
       
      </div>
    </div>
  </div>
</div>

  )
}

export default Navbar