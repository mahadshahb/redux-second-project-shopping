import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { add } from '../store/cartSlice';
import { useSelector } from 'react-redux';

const NavBar = () => {
    // const [count , setCount] = useState(0);
    const items = useSelector((state) => state.cart);
    console.log(items.length);
    // setCount(add() + 1);
    return (
        <div className='main_div_name'>
            <span>REDUX STORE</span>
            <div>
                <Link className='navLink' to="/">Home</Link>
                <Link className='navLink' to="/cart">Cart</Link>
                <span className='cartCount'>Cart Items: {items.length}</span>
            </div>
        </div>
    )
}

export default NavBar