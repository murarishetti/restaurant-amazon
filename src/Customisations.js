import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/app-actions';

import './customisations.scss';

class Customisations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCustomisations: {}
        };
    }
    handleCheckedChange = (val, key, selection) => {
        let selectedCustomisations = { ...this.state.selectedCustomisations };
        let selectedCategory = selectedCustomisations[key];
        if (selection === 'single') {
            selectedCategory = val;
        } else {
            selectedCategory = selectedCategory || [];
            const index = selectedCategory.indexOf(val);
            index === -1 && selectedCategory.push(val);
            index > -1 && selectedCategory.splice(index, 1);
        }
        selectedCustomisations[key] = selectedCategory;
        this.setState({
            selectedCustomisations
        });
    };

    handleAddToCart = () => {
        this.props.actions.addCustomisedToCart(
            this.props.item,
            this.state.selectedCustomisations
        );
        this.props.onClose();
    };
    render() {
        const { type, show, onClose, data } = this.props;
        const { selectedCustomisations } = this.state;
        const customisations = data[type].customisations;
        return (
            <Modal
                show={show}
                onHide={onClose}
                dialogClassName="customisations"
            >
                <Modal.Header closeButton>Customisations</Modal.Header>
                <Modal.Body>
                    {Object.keys(customisations).map(customisation => {
                        const selection =
                            customisations[customisation].selection;
                        return (
                            <div className="customisation" key={customisation}>
                                <div className="title">
                                    {customisation}
                                </div>
                                <ul className="items">
                                    {customisations[
                                        customisation
                                    ].data.map(d => {
                                        if (typeof d === 'string') {
                                            return (
                                                <div
                                                    className="checkbox app-checkbox"
                                                    key={d}
                                                    onClick={() =>
                                                        this.handleCheckedChange(
                                                            d,
                                                            customisation,
                                                            selection
                                                        )}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={
                                                            selectedCustomisations[
                                                                customisation
                                                            ] &&
                                                            selectedCustomisations[
                                                                customisation
                                                            ].indexOf(d) > -1
                                                        }
                                                        value={d}
                                                    />
                                                    <label>
                                                        {d}
                                                    </label>
                                                </div>
                                            );
                                        }
                                        return Object.keys(d).map(key => {
                                            const checked =
                                                selection === 'single'
                                                    ? key ===
                                                      selectedCustomisations[
                                                          customisation
                                                      ]
                                                    : selectedCustomisations[
                                                          customisation
                                                      ] &&
                                                      selectedCustomisations[
                                                          customisation
                                                      ].indexOf(key) > -1;

                                            return (
                                                <div
                                                    className="item-options"
                                                    key={key}
                                                >
                                                    <div
                                                        className={`item-label ${selection ===
                                                        'single'
                                                            ? 'radio app-radio'
                                                            : 'checkbox app-checkbox'}`}
                                                        onClick={() =>
                                                            this.handleCheckedChange(
                                                                key,
                                                                customisation,
                                                                selection
                                                            )}
                                                    >
                                                        <input
                                                            type={`${selection ===
                                                            'single'
                                                                ? 'radio'
                                                                : 'checkbox'}`}
                                                            checked={checked}
                                                            name={key}
                                                            value={key}
                                                        />
                                                        <label>
                                                            {key}
                                                        </label>
                                                    </div>
                                                    <div className="item-price">
                                                        {d[key]}
                                                    </div>
                                                </div>
                                            );
                                        });
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <span>200</span>
                    <button
                        className="btn btn-success"
                        onClick={this.handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

Customisations.propTypes = {
    item: PropTypes.string,
    type: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func,
    price: PropTypes.number,
    data: PropTypes.object
};

Customisations.defaultProps = {
    type: 'Vegetarian',
    onClose: () => {},
    show: true
};

function mapStateToProps(state) {
    const { Items } = state;
    return {
        data: Items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customisations);
