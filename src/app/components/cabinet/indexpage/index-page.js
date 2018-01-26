import React, { Component } from 'react';
import Modal from '../../../shared/ui/modal/modal';
import AddClient from './add-client/add-client';
import ClientList from './client-list/client-list';
import './index-page.css';

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
                    
                    {
                        this.state.isModalOpen &&
                        <Modal onClose={ this.toggleModal } title="Новая запись">
                            <AddClient />
                        </Modal>
                    }
                </div>
                
                <ClientList />
            </div>
        );
    }
}

export default IndexPage;