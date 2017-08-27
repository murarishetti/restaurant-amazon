import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Button, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app-actions';
import Customisations from './Customisations';
import './foodmenu.scss';

class FoodMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            type: null,
            selectedItem: null
        };
    }
    handleItemClick = (type, selectedItem) => {
        this.setState({
            showModal: true,
            type,
            selectedItem
        });
    };
    handleClose = () => {
        this.setState({
            showModal: false,
            type: null,
            selectedItem: null
        });
    };
    handleAddToCart = (e, item, add = true) => {
        e.stopPropagation();
        if (add) {
            this.props.actions.addToCart(item);
        } else {
            this.props.actions.removeFromCart(item);
        }
    };
    render() {
        const { showModal, type, selectedItem } = this.state;
        const { data, selectedItems } = this.props;
        return (
            <div className="food-menu">
                {Object.keys(data).filter(key => key !== 'Places').map(key => {
                    const menu = data[key].data;
                    return (
                        <Panel header={key} key={key}>
                            {Object.keys(menu).map(k => {
                                return (
                                    <div
                                        className="item"
                                        key={k}
                                        onClick={() =>
                                            this.handleItemClick(key, k)}
                                    >
                                        <div className="item-content">
                                            <div className="dish">
                                                {k}
                                            </div>
                                            <div className="price">
                                                {menu[k]}
                                            </div>
                                            <div className="hint">
                                                Customisations avaialble
                                            </div>
                                        </div>
                                        <div className="item-actions">
                                            {(!selectedItems[k] ||
                                                selectedItems[k] === 0) &&
                                                <button
                                                    className="btn btn-default"
                                                    onClick={e =>
                                                        this.handleAddToCart(
                                                            e,
                                                            k
                                                        )}
                                                >
                                                    Add
                                                </button>}
                                            {selectedItems[k] > 0 &&
                                                <ButtonGroup>
                                                    <Button
                                                        onClick={e =>
                                                            this.handleAddToCart(
                                                                e,
                                                                k,
                                                                false
                                                            )}
                                                    >
                                                        -
                                                    </Button>
                                                    <Button className="item-count">
                                                        {selectedItems[k]}
                                                    </Button>
                                                    <Button
                                                        onClick={e =>
                                                            this.handleAddToCart(
                                                                e,
                                                                k
                                                            )}
                                                    >
                                                        +
                                                    </Button>
                                                </ButtonGroup>}
                                        </div>
                                    </div>
                                );
                            })}
                        </Panel>
                    );
                })}
                {showModal &&
                    <Customisations
                        type={type}
                        item={selectedItem}
                        onClose={this.handleClose}
                    />}
            </div>
        );
    }
}

FoodMenu.propTypes = {
    actions: PropTypes.object,
    data: PropTypes.object,
    selectedItems: PropTypes.object
};

function mapStateToProps(state) {
    const { Items, Cart: { items } } = state;
    return {
        data: Items,
        selectedItems: items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodMenu);
