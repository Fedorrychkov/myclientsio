import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/header';
import IndexPage from './indexpage/index-page';
import Analytics from './analytics/analytics';
import Customers from './customers/customers';

class Cabinet extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="wrapper">
                    <Switch>
                        <Route exact path='/cabinet' component={IndexPage}/>
                        <Route exact path='/cabinet/customers' component={Customers}/>
                        <Route exact path='/cabinet/analytics' component={Analytics}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Cabinet;
