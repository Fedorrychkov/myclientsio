import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormControl from '../../../shared/ui/form-control/form-control';

class SignUp extends Component {
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
                        <button className="button button__form" type="submit" disabled={!this.state.canSubmit}>Зарегистрироваться</button>
                    </Formsy>
                </div>
            </div>
        );
    }
}

export default SignUp;