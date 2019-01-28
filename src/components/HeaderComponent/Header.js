import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="main-nav">
            <div className="logo">Movie review</div>
            <ul>
                <li>{props.home}</li>
                <li>{props.about}</li>
                <li>{props.movies}</li>
            </ul>
        </div>

    )
};

export default Header;