import React, { Component } from 'react';
import ClientItem from './client-item/client-item';

class ClientList extends Component {

    clientList = [
        {
            name: "Рик Мартин",
            phone: "+79432221111",
            email:  "rickmartin@gmail.com",
            status: "VIP",
            activeDate: "13.01.2018 11:55"
        },
        {
            name: "Ричард Милк",
            phone: "+79572342219",
            email:  "richardmilk@yandex.ru",
            status: "Обычный",
            activeDate: "16.01.2018 17:55"
        }
    ];

    render() {
        return (
            <div className="clients">
                <h3 className="section__title">Последние записи</h3>
                <table className="table clients__table" cellSpacing="0">
                    <thead className="table__head">
                        <tr className="table__row">
                            <th className="table__th">Клиент</th>
                            <th className="table__th">E-mail</th>
                            <th className="table__th">Статус</th>
                            <th className="table__th">Дата записи</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">
                        { 
                            this.clientList.map((item, index) => <ClientItem key={index} clientItem={item}/> )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ClientList;