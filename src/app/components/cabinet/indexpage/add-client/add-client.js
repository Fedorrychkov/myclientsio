import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormControl from '../../../../shared/ui/form-control/form-control';

class AddClient extends Component {
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
            <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <FormControl
                    name="name"
                    label="Имя"
                    validationError="This is not a valid name"
                />
                <FormControl
                    name="phone"
                    label="Телефон*"
                    validationError="This is not a valid phone"
                    required
                />
                <FormControl
                    name="email"
                    label="E-mail"
                    validations="isEmail"
                    validationError="This is not a valid email"
                />
                <FormControl
                    name="address"
                    label="Адрес*"
                    validationError=""
                />
                <button className="button button__form" type="submit" disabled={!this.state.canSubmit}>Добавить</button>
            </Formsy>
        );
    }
}

export default AddClient;