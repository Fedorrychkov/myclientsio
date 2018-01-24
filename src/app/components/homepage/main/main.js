import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/home';
import Price from './Price/price';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/prices' component={Price}/>
                </Switch>
            </main>
        );
    }
}

export default Main;