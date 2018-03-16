import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
import classNames from 'classnames';

class FormPassword extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isSuccess: false,
            isFocus: false,
            stateClassName: ''
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        const regularExpression = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        this.props.setValue(event.currentTarget.value);
        this.setState({isFocus: true});
        console.log(event.currentTarget.value);
        if (event.currentTarget.value.length > 5) {
            if (regularExpression.test(event.currentTarget.value)) {
                this.setState({isSuccess: true});
                this.setState({stateClassName: 'gradial-input__success'});
            }
        } else {
            this.setState({isSuccess: false});
            this.setState({stateClassName: 'gradial-input__error'});
        }
    }

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
     
        return (
            <label className="gradial-input__field input__field" htmlFor="true">
                <input  type="password" 
                        onChange={ this.changeValue } 
                        // 'gradial-input__error' : 'gradial-input__success'
                        // (this.state.isSuccess && this.state.isFocus) ? 'gradial-input__success' : 'gradial-input__error'
                        className={classNames('gradial-input__control font-size--md input__control input__label', this.state.stateClassName )}
                        placeholder=" "
                        value={ this.props.getValue() || '' } />
                <span className="gradial-input__label">{ this.props.label }</span>
                {/* <span className="input__error">{ errorMessage }</span> */}
            </label>
        );
    }
}

export default withFormsy(FormPassword);