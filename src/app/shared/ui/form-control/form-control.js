import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';

class FormControl extends Component {
    
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }

    render() {
        // An error message is returned only if the component is invalid
        const errorMessage = this.props.getErrorMessage();
     
        return (
            <label className="input__field" htmlFor="true">
                <span className="input__label">{ this.props.label }</span>
                <input
                    className="input__control"
                    onChange={ this.changeValue }
                    type="text"
                    value={ this.props.getValue() || '' }
                />
                <span className="input__error">{ errorMessage }</span>
            </label>
        );
    }
}

export default withFormsy(FormControl);