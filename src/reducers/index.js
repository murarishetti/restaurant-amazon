import { combineReducers } from 'redux';
import initialState from './initial-state';
import * as actionTypes from '../actions/action-types';

export function Cart(state = initialState.Cart, action) {
    let newState = { ...state };
    const { items } = newState;
    let itemCount = items[action.data] || 0;
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            itemCount = updatedCount(itemCount);
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.data]: itemCount
                },
                count: itemCount
            };
        case actionTypes.REMOVE_FROM_CART:
            itemCount = updatedCount(itemCount, false);
            newState = {
                ...newState,
                items: {
                    ...newState.items,
                    [action.data]: itemCount
                },
                count: itemCount,
                customisations: {
                    ...newState.customisations
                }
            };
            if (itemCount === 0) {
                delete newState.items[action.data];
                delete newState.customisations[action.data];
            }
            return {
                ...newState
            };
        case actionTypes.ADD_CUSTOMISED_TO_CART:
            itemCount = updatedCount(itemCount);
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.data]: itemCount
                },
                customisations: {
                    ...state.customisations,
                    [action.data]: {
                        ...action.customisations
                    }
                },
                count: itemCount
            };
        default:
            return state;
    }
}

function updatedCount(count, add = true) {
    if (add) {
        count += 1;
        return count;
    }
    count -= 1;
    count = count < 0 ? 0 : count;
    return count;
}
export function Places(state = initialState.Places) {
    return state;
}

export function Items(state = initialState.Items) {
    return state;
}

const appReducer = combineReducers({
    Cart,
    Items,
    Places
});

export default appReducer;
