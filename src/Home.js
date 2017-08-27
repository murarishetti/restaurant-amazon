import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import data from './data';
import './home.scss';

class Home extends Component {
    handleItemClick = selectedPlace => {
        this.props.history.push(`/places/${selectedPlace}`);
    };
    render() {
        return (
            <div className="home">
                {data['Places'].map(d => {
                    return (
                        <div
                            className="item-main"
                            key={d.name}
                            onClick={() => this.handleItemClick(d.name)}
                        >
                            <div
                                className="item-main-logo"
                                style={{
                                    backgroundImage: `url(${d.thumbnail}`
                                }}
                            />
                            <div className="item-main-content">
                                <div className="title">
                                    {d.name}
                                </div>
                                <div className="sub-title">
                                    {d.area}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withRouter(Home);
