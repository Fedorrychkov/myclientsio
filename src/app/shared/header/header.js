import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import Logo from '../ui/logo/logo';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__body wrapper">
                    <Logo />
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header;