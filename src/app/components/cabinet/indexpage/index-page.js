import React, { Component } from 'react';
import Modal from '../../../shared/ui/modal/modal';

class IndexPage extends Component {
    state = {
        isModalOpen: false
    };

    toggleModal = () => {
        this.setState(state => ({ isModalOpen: !state.isModalOpen }))
    };

    render() {
        return (
            <div>
                <div className="control-panel">
                    <button className="button button__control" onClick={this.toggleModal}>
                        <span>Добавить клиента</span>
                    </button>
                </div>
                {
                    this.state.isModalOpen &&
                    <Modal onClose={ this.toggleModal }>
                        <h1>Modal</h1>
                    </Modal>
                }
            </div>
        );
    }
}

export default IndexPage;