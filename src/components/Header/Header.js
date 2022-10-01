import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                <div className="logo">
                     <img src={logo} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;