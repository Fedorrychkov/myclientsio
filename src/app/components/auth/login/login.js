import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    render() {
        return (
            <div>
                isLogin
                <p>У вас ещё нет аккаунта? <Link to='/auth/signup' className="link link__primary">Зарегистрироваться</Link></p>
            </div>
        );
    }
}

export default LogIn;