import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { connect } from 'react-redux';
import FormControl from '../../../../shared/ui/form-control/form-control';
import { addActivity } from '../../../../../redux/actions/actions';

class AddClient extends Component {
    constructor(props) {
        super(props);
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
        this.state = { canSubmit: false };
        this.submit = this.submit.bind(this);
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
        model.id = '12132';
        model.status = 'Обычный';
        model.activeDate = '11.11.2018';
        console.log(model);
        this.props.add(model);
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


const mapDispatchToProps = (dispatch) => {
    return {
        add: (activity) => {
            dispatch(addActivity(activity))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddClient);
