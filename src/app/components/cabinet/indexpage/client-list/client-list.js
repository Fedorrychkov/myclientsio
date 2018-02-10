import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ClientItem from './client-item/client-item';

class ClientList extends Component {

    clientList = [
        {   
            id: '3323',
            name: "Рик Мартин",
            phone: "+79432221111",
            email:  "rickmartin@gmail.com",
            status: "VIP",
            address: "Муштари 22",
            activeDate: "13.01.2018 11:55"
        },
        {
            id: '3324',
            name: "Ричард Милк",
            phone: "+79572342219",
            email:  "richardmilk@yandex.ru",
            status: "Обычный",
            address: "Муштари 22",
            activeDate: "16.01.2018 17:55"
        }
    ];

    constructor(props) {
        super(props);
        this.state = {clientList: []};
    }
    componentWillMount() {
        this.setState({clientList: this.clientList});
        this.clientList.map((item, index) => this.props.fill(item));
    }
    render() {
        return (
            <div className="clients">
                <h3 className="section__title">Последние заказы</h3>
                <table className="table clients__table" cellSpacing="0">
                    <thead className="table__head">
                        <tr className="table__row">
                            <th className="table__th">Клиент</th>
                            <th className="table__th">E-mail</th>
                            <th className="table__th">Статус</th>
                            <th className="table__th">Адрес</th>
                            <th className="table__th">Дата заказа</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        { this.props.activity.map((item, index) => <ClientItem key={item.id} clientItem={item}/> ) }
                    </tbody>
                </table>
            </div>
        );
    }
}

ClientList.propTypes = {
    clientList: PropTypes.func
}

export default ClientList;