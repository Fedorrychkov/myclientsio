import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormControl from '../../../shared/ui/form-control/form-control';
import env from '../../../environment/env';
import reloadIcon from '../../../assets/icons/reload.svg';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.submit = this.submit.bind(this);
        this.state = { canSubmit: false, loginError: "", isLoading: false };
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
        var signupReq = new Request(`${env.apiUrl}/auth/signup`, {
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            method: 'post',
            mode: 'cors',
            cache: 'default',
            body: model
        });
        if (!env.production) {
            console.log(model);
            console.log(`Request ${signupReq.method}, ${signupReq.url}}`, `Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);    
        }
        fetch(signupReq).then(
            data => {
                console.log(data);
                this.setState({ isLoading: false });
                this.setState({loginError: ""});
            }
        ).catch(error => {
            this.setState({loginError: "Извините, но что-то пошло не так. Попробуйте войти позднее."})
            this.setState({ isLoading: false });
        });
    }

    render() {
        return (
            <div>
                { this.state.loginError? <p className="error error-message">{ this.state.loginError }</p> : '' }
                <div className="auth__form">
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        <FormControl
                            name="username"
                            label="Логин*"
                            validationError=" "
                            required
                        />
                        <FormControl
                            name="name"
                            label="Имя и Фамилия"
                            validationError=" "
                        />
                        <FormControl
                            name="email"
                            label="E-mail*"
                            validations="isEmail"
                            validationError="Не верный формат E-mail"
                            required
                        />
                        <FormControl
                            name="password"
                            label="Пароль*"
                            validationError=" "
                            required
                        />
                        <button className="button button__form" type="submit" disabled={!this.state.canSubmit}>
                            { this.state.isLoading? <img src={reloadIcon} className="icon icon-reload" alt="reloading icon"/> : 'Зарегистрироваться' }
                        </button>
                    </Formsy>
                </div>
            </div>
        );
    }
}

export default SignUp;