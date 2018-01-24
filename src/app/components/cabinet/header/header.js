import React, { Component } from 'react';
import './header.css';
import Logo from '../../../shared/ui/logo/logo';
import Navigation from './navigation/navigation';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__body wrapper">
                    <Logo link="/cabinet"/>
                    <Navigation />
                </div>
            </header>
        );
    }
}

export default Header;