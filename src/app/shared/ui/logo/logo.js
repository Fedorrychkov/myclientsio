import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './logo.css';

class Logo extends Component {
    render() {
        return (
            <Link to={ this.props.link ? this.props.link : '/' } className="link">
                <h1 className="logo"><span>M</span>y<span>C</span>lients</h1>
            </Link>
        );
    }
}

export default Logo;