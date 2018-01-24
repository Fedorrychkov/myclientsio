import React, { Component } from 'react';

class PageSection extends Component {
    render() {
        return (
            <section className={"section " + this.props.class}>
                <div className="section__body wrapper">
                    { this.props.children }
                </div>
            </section>
        );
    }
}

export default PageSection;