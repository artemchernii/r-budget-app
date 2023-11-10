import { useReducer } from 'react';
import { defaultContext, ACTIONS, currencyContext } from './defaultContext';

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.CHANGE:
            return {
                ...state,
                currency: action.payload,
            };
        case ACTIONS.RESET:
            return defaultContext;
        default:
            throw new Error('No action');
    }
};

// eslint-disable-next-line react/prop-types
export const CurrencyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultContext());

    const values = {
        state,
        dispatch,
    };

    return (
        <currencyContext.Provider value={values}>
            {children}
        </currencyContext.Provider>
    );
};
