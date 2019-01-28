import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div className="main-nav">
            <div className="logo">Movie review</div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </div>

    )
};

export default Header;