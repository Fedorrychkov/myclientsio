import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/header';
import IndexPage from './indexpage/index-page';
import Analytics from './analytics/analytics';
import Customers from './customers/customers';
import './cabinet.css';

class Cabinet extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="wrapper cabinet__body">
                    <div className="cabinet__left"></div>
                    <div className="cabinet__right">
                        <Switch>
                            <Route exact path='/cabinet' component={IndexPage}/>
                            <Route exact path='/cabinet/customers' component={Customers}/>
                            <Route exact path='/cabinet/analytics' component={Analytics}/>
                        </Switch>
                    </div>
                </main>
            </div>
        );
    }
}

export default Cabinet;
