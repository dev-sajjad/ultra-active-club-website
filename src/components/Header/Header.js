import React from 'react';
import logo from '../../logo.gif';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h2>Visit Beautiful Sylhet</h2>
        </div>
    );
};

export default Header;