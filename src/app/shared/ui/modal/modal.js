import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    render() {
        return (
            <div className="modal__body">
                <h4 className="modal__title">{ this.props.title }</h4> 
                <div className="modal__close">
                    <span className="close"><i className="fa fa-times" aria-hidden="true" onClick={this.props.onClose}></i></span>
                </div>
                <div className="modal__body-body">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default Modal;