import React, { Component } from 'react';

class ClientItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.clientItem
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props === nextProps;
    }

    render() {
        let item = this.props.clientItem;
        return (
            <tr className="table__row">
                <td className="table__td">
                    <div className="clients__name table__td-top table__td-name">{ item.name }</div>
                    <div className="clients__phone table__td-bottom table__td-phone">
                        <a href={'tel:' + item.phone }>{ item.phone }</a>
                    </div>
                </td>
                <td className="table__td">
                    <div className="clients__email table__td-email">
                        <a href="mailto:">{ item.email }</a>
                    </div>
                </td>
                <td className="table__td">
                    <div className="clients__status table__td-status">  
                        { item.status }
                    </div>
                </td>
                <td className="table__td">
                    <div className="clients__date table__td-date">
                        { item.activeDate }
                    </div>
                </td>
            </tr>
        );
    }
}

export default ClientItem;