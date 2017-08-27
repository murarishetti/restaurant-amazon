import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectedPlace from './SelectedPlace';
import FoodMenu from './FoodMenu';
import CartDelivery from './CartDelivery';
import data from './data';
import './place.scss';

class Place extends Component {
    render() {
        let selectedPlace = this.props.match.params.place;
        selectedPlace = data.Places.filter(d => d.name === selectedPlace)[0];
        return (
            <div className="place">
                <SelectedPlace data={selectedPlace} back={this.handleBack} />
                <FoodMenu addToCart={this.handleAddToCart} />
                <CartDelivery />
            </div>
        );
    }
}
Place.propTypes = {
    match: PropTypes.object
};

export default Place;
