import { useReducer } from 'react';
import { defaultContext, ACTIONS, stateContext } from './defaultContext';

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.payload,
            };
        case ACTIONS.SET_THEME:
            return {
                ...state,
                theme: action.payload,
            };
        case ACTIONS.RESET:
            return defaultContext;
        default:
            throw new Error('No action');
    }
};

// eslint-disable-next-line react/prop-types
export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultContext());

    const values = {
        state,
        dispatch,
    };

    return (
        <stateContext.Provider value={values}>{children}</stateContext.Provider>
    );
};
