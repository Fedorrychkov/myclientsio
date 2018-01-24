import React, { Component } from 'react';
import Header from '../../shared/header/header';
import Main from './main/main';
import Footer from './footer/footer';

class HomePage extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Main />  
                <Footer />
            </div>
        );
    }
}

export default HomePage;