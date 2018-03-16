import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Header from './header/header';
import IndexPage from './indexpage/index-page';
import Analytics from './analytics/analytics';
import Customers from './customers/customers';
import UserSettings from './settings';
import SideBar from '../../shared/sidebar';
import './cabinet.css';
import ProfileComponent from './profile';

class Cabinet extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="wrapper cabinet__body">
                    <div className="cabinet__left">
                        <SideBar>
                            <div className="sidebar">
                                <div className="sidebar__profile">
                                    <div className="sidebar__profile--name">Фёдор Рычков</div>
                                    <div className="sidebar__profile--username">@fedorrychkov</div>
                                </div>
                            </div>
                            <ul className="navbar__list">
                                <li className="navbar__item">
                                    <NavLink to="/cabinet/profile" className="navbar__link" activeClassName="navbar__link-active">Мой профиль</NavLink>
                                    <NavLink to="/cabinet/reports" className="navbar__link" activeClassName="navbar__link-active">Отчёты</NavLink>
                                    <NavLink to="/cabinet/settings" className="navbar__link" activeClassName="navbar__link-active">Настройки</NavLink>
                                </li>
                            </ul>
                        </SideBar>
                    </div>
                    <div className="cabinet__right">
                        <Switch>
                            <Route exact path='/cabinet' component={IndexPage}/>
                            <Route exact path='/cabinet/customers' component={Customers}/>
                            <Route exact path='/cabinet/analytics' component={Analytics}/>
                            <Route exact path='/cabinet/settings' component={UserSettings}/>
                            <Route exact path='/cabinet/profile' component={ProfileComponent}/>
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}

export default Cabinet;
