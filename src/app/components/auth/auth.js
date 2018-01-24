import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LogIn from './login/login';
import SignUp from './signup/signup';
import Header from '../../shared/header/header';
import './auth.css';

class Auth extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="wrapper">
                    <Switch>
                        <Route exact path='/auth' component={LogIn}/>
                        <Route path='/auth/login' component={LogIn}/>
                        <Route path='/auth/signup' component={SignUp}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default Auth;