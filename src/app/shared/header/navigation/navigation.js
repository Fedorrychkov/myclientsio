import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="nav wrapper">
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="/prices" activeClassName="nav__link-active">Prices</NavLink></li>
                    <li className="nav__item"><NavLink to="/auth/login" activeClassName="nav__link-active">Log in</NavLink></li>
                    <li className="nav__item"><NavLink to="/auth/signup" activeClassName="nav__link-active">Sign up</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;