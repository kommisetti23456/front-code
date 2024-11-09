  import React from 'react'
  import {Link} from "react-router-dom"
  
  const Navbar = () => {
    return (
    <header className='fixed-nav-bar w-nav'>
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center"> 
        
        <ul className='nav__links'>
          <li className='links'><Link to="/">
          home
          </Link></li>
          <li className='links'><Link to="/shop">
          shop
          </Link></li>
          <li className='links'><Link to="/">
          pages
          </Link></li>
          <li className='links'><Link to="/contact">
          contact
          </Link></li>
        </ul>
        <div className='nav__logo'>
        </div>
<Link to="/">Ecommerce <span>.</span></Link>
<div className='nav__icons relative'>
<span>
  <Link to="/search">
  <i className="ri-search-line"></i></Link>
</span>
<span>
  <button className='hover:text-primary'>
  <i class="ri-shopping-bag-line"></i>
  <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center'>0</sup>
  </button>
  </span>
  <span>
    <Link to="/login">
    <i class="ri-user-line"></i>
    </Link>
  </span>
</div>
       
      </nav>
    </header>
    )
  }
  
  export default Navbar












