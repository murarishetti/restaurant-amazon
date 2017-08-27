import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedPlace extends Component {
    render() {
        const { data = {} } = this.props;
        const { thumbnail, name, area } = data;
        return (
            <div className="selected-place">
                <div
                    className="item-logo"
                    style={{
                        backgroundImage: `url(${thumbnail || ''}`
                    }}
                />
                <div className="item-content">
                    <div className="title">
                        {name || ''}
                    </div>
                    <div className="sub-title">
                        {area || ''}
                    </div>
                </div>
            </div>
        );
    }
}

SelectedPlace.PropTypes = {
    data: PropTypes.object
};

export default SelectedPlace;
