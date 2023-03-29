import './Header.css'
import Logo  from './../../images/Logo.svg';
import React from 'react';

const Header = () => {
    // console.log(3)
    return (
        <div className='header'>
            <div className="header_logo"><img src={Logo} alt="" /></div>
            <div className="header_nav">
                <a href="/abc">Order</a>
                <a href="/abc">Order Review</a>
                <a href="/abc">Manage Inventory</a>
                <a href="/abc">Login</a>
            </div>
        </div>
    );
};

export default Header;