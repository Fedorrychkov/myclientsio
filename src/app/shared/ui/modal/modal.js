import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

class Modal extends Component {
    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal__body"> 
                    <div className="modal__close">
                        <span className="close"><i class="fa fa-times" aria-hidden="true" onClick={this.props.onClose}></i></span>
                    </div>
                    { this.props.children }
                </div>
            </div>,
            this.root
        );
    }
}

export default Modal;