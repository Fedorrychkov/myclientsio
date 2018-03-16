import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Formsy from 'formsy-react';
import env from '../../../environment/env';
import FormControl from '../../../shared/ui/form-control/form-control';
import FormPassword from '../../../shared/ui/form-password/form-password';
import reloadIcon from '../../../assets/icons/reload.svg';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.submit = this.submit.bind(this);
        this.state = { canSubmit: false, loginError: "", isLoading: false, redirect: false };
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }
     
    enableButton() {
        this.setState({ canSubmit: true });
    }
     
    submit(model) {
        const date = new Date();
        this.setState({ isLoading: true });
        
        var loginReq = new Request(`${env.apiUrl}/auth/login`, {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'post',
            mode: 'cors',
            cache: 'default',
            body: model
        });
        
        fetch(loginReq).then(
            data => {
                console.log(data);
                this.setState({isLoading: false});
                this.setState({loginError: ""});
                localStorage.setItem('myclients.auth_token', data.token );
                
            }
        ).catch(error => {
            this.setState({loginError: "Извините, но что-то пошло не так. Попробуйте войти позднее."})
            this.setState({ isLoading: false, redirect: true }); // TODO: Redirect надо перенести в then, тут временно, так как нет backend
            localStorage.removeItem('myclients.auth_token' );
        });
        if (!env.production) {
            console.log(model);
            console.log(`Request ${loginReq.method}, ${loginReq.url}}`, `Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);    
        }
        // localStorage.setItem('myclients.auth_token', 'data.token' );
    }

    render() {
        return (
            <div>
                { this.state.loginError? <p className="error error-message">{ this.state.loginError }</p> : '' }
                <div className="auth__form">
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        <FormControl
                            name="username"
                            label="Логин"
                            checkValue={true}
                            type="text"
                            required
                        />
                        <FormPassword
                            name="password"
                            label="Пароль"
                            required
                        />
                        <button className="button gradial-button gradial-button-blue gradial-button--shadow font-size--md" type="submit" disabled={!this.state.canSubmit}>
                            { this.state.isLoading? <img src={reloadIcon} className="icon icon-reload" alt="reloading icon"/> : 'Войти' }
                        </button>
                    </Formsy>
                </div>
                <p>У вас ещё нет аккаунта? <Link to='/auth/signup' className="link link__primary">Зарегистрироваться</Link></p>
            
                { this.state.redirect ? <Redirect to="/cabinet" />: '' }
            </div>
        );
    }
}

export default LogIn;