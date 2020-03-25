import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div data-test="wrap">
                <div data-test="logo">
                    <img data-test="logo-adidas" src={Logo} alt="logo"/>
                </div>
            </div>
        </header>
    )
}

export default Header;