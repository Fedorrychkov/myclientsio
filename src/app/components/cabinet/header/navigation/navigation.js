import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="nav wrapper">
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="/cabinet/customers" activeClassName="nav__link-active">Мои клиенты</NavLink></li>
                    <li className="nav__item"><NavLink to="/cabinet/analytics" activeClassName="nav__link-active">Статистика</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;