import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Formsy from 'formsy-react';
import FormControl from '../../../shared/ui/form-control/form-control';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = { canSubmit: false };
    }

    disableButton() {
        this.setState({ canSubmit: false });
    }
     
      enableButton() {
        this.setState({ canSubmit: true });
    }
     
      submit(model) {
        // fetch('http://example.com/', {
        //   method: 'post',
        //   body: JSON.stringify(model)
        // });
        console.log(model);
    }

    render() {
        return (
            <div>
                <div className="auth__form">
                    <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                        <FormControl
                            name="username"
                            label="Логин или E-mail"
                            validationError=" "
                            required
                        />
                        <FormControl
                            name="password"
                            label="Пароль*"
                            validationError=" "
                            required
                        />
                        <button className="button button__form" type="submit" disabled={!this.state.canSubmit}>Войти</button>
                    </Formsy>
                </div>
                <p>У вас ещё нет аккаунта? <Link to='/auth/signup' className="link link__primary">Зарегистрироваться</Link></p>
            </div>
        );
    }
}

export default LogIn;