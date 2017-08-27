import React, { Component } from 'react';
import { FormControl, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app-actions';
import './cartdelivery.scss';

class CartDelivery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deliveryLocation: ''
        };
    }

    handleAddToCart = (item, add = true) => {
        if (add) {
            this.props.actions.addToCart(item);
        } else {
            this.props.actions.removeFromCart(item);
        }
    };

    getPriceOfItem = item => {
        const { Items } = this.props;
        const matches = Object.keys(Items).map(key => {
            const { data } = Items[key];
            const match = Object.keys(data)
                .filter(k => k === item)
                .map(d => data[d]);
            return match[0];
        });
        return matches[0] || 0;
    };

    getTotal = () => {
        const { selectedItems } = this.props;
        let total = Object.keys(selectedItems).map(
            key => selectedItems[key] * this.getPriceOfItem(key)
        );
        total = total.reduce((sum, val) => sum + val, 0);
        return total;
    };
    render() {
        const { selectedItems } = this.props;
        return (
            <div className="cart-delivery">
                <div className="delivery">
                    <div className="header">Delivery Location</div>
                    <FormControl onChange={this.handleChange} />
                </div>
                <div className="cart">
                    <div className="header">Your order</div>
                    <div className="content">
                        {Object.keys(selectedItems).map(key => {
                            const price = this.getPriceOfItem(key);
                            return (
                                <div key={key}>
                                    <div className="item">
                                        {key}
                                    </div>
                                    <div className="item-detail">
                                        <div className="item-quantity">
                                            <ButtonGroup>
                                                <Button
                                                    onClick={() =>
                                                        this.handleAddToCart(
                                                            key,
                                                            false
                                                        )}
                                                >
                                                    -
                                                </Button>
                                                <Button className="item-count">
                                                    {selectedItems[key]}
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        this.handleAddToCart(
                                                            key
                                                        )}
                                                >
                                                    +
                                                </Button>
                                            </ButtonGroup>
                                            x
                                            <div className="item-price">
                                                {price}
                                            </div>
                                        </div>
                                        <div className="item-total-price">
                                            {selectedItems[key] * price}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="footer">
                        <div className="title">SubTotal</div>
                        <div className="price">
                            {this.getTotal()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { Items, Cart: { items } } = state;
    return {
        Items,
        selectedItems: items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDelivery);
