import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
import classNames from 'classnames';
class FormControl extends Component {
    
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
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.const regularExpression = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        this.props.setValue(event.currentTarget.value);
        this.setState({isFocus: true});
        console.log(event.currentTarget.value);
        switch (this.props.type) {
            case 'text': {
                if (this.props.checkValue) {
                    if (event.currentTarget.value.length > 3) {
                        this.setState({isSuccess: true});
                        this.setState({stateClassName: 'gradial-input__success'});
                    } else {
                        this.setState({isSuccess: false});
                        this.setState({stateClassName: 'gradial-input__error'});
                    }
                }
                break;
            }
            case 'email': {
                const regularExpression = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if (event.currentTarget.value.length > 2) {
                    if (regularExpression.test(event.currentTarget.value)) {
                        this.setState({isSuccess: true});
                        this.setState({stateClassName: 'gradial-input__success'});
                    }
                } else {
                    this.setState({isSuccess: false});
                    this.setState({stateClassName: 'gradial-input__error'});
                }
                break;
            }
            default:
                break;
        }
    }

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
     
        return (
            // <label className="input__field" htmlFor="true">
            //     <span className="input__label">{ this.props.label }</span>
            //     <input
            //         className="input__control"
            //         onChange={ this.changeValue }
            //         type="text"
            //         value={ this.props.getValue() || '' }
            //     />
            //     <span className="input__error">{ errorMessage }</span>
            // </label>
            <label className="gradial-input__field input__field" htmlFor={this.props.name}>
                <input  type="text" 
                        onChange={ this.changeValue } 
                        name={this.props.name}
                        // 'gradial-input__error' : 'gradial-input__success'
                        className={classNames('gradial-input__control font-size--md input__control input__label', this.state.stateClassName )}
                        placeholder=" "
                        value={ this.props.getValue() || '' } />
                <span className="gradial-input__label">{ this.props.label }</span>
                {/* <span className="input__error">{ errorMessage }</span> */}
            </label>
        );
    }
}

export default withFormsy(FormControl);