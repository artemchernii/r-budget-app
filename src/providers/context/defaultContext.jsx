import { createContext } from 'react';

export const currencyContext = createContext(null);

export const ACTIONS = {
    CHANGE: 'changeCurrency',
    RESET: 'resetToDefault',
};
export const defaultContext = () => {
    return {
        currency: 'UAH',
    };
};
