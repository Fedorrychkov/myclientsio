import React, { Component } from 'react';
import Modal from '../../../shared/ui/modal/modal';
import AddClient from './add-client/add-client';
// import ClientList from './client-list/client-list';
import ShowList from '../../../containers/showList';
// import AddActivity from '../../../containers/addActivity';
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
                        <span>Новый заказ</span>
                    </button>
                    
                    {
                        this.state.isModalOpen &&
                        <Modal onClose={ this.toggleModal } title="Заказ">
                            <AddClient />
                        </Modal>
                    }
                </div>
                <div>
                    {/* < AddActivity /> */}
                </div>
                {/* <ClientList /> */}
                <ShowList />
            </div>
        );
    }
}

export default IndexPage;