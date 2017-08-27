import * as types from './action-types';

export function addToCart(data) {
    return {
        type: types.ADD_TO_CART,
        data
    };
}

export function removeFromCart(data) {
    return {
        type: types.REMOVE_FROM_CART,
        data
    };
}

export function addCustomisedToCart(data, customisations) {
    return {
        type: types.ADD_CUSTOMISED_TO_CART,
        data,
        customisations
    };
}
