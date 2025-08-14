import React from 'react'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';

const Shopppingcart = () => {
  return (
    <div>
      <div className='bg-black'>
        <Navbar/>
      </div>
         <Routes>
          <Route path = "/" element= {<Home/>} />
          <Route path = "/cart" element= {<Cart/>} />
         </Routes>
    </div>
  )
}

export default Shopppingcart;