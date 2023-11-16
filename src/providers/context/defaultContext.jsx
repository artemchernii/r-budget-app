import { createContext } from 'react';
import { getFromStorage } from '../../utils/sessionStorage';
import { THEMES } from '../themes/themeList';

export const stateContext = createContext(null);

export const ACTIONS = {
    CHANGE_CURRENCY: 'changeCurrency',
    SET_THEME: 'setTheme',
    RESET: 'resetToDefault',
};
export const defaultContext = () => {
    return {
        currency: 'UAH',
        theme: getFromStorage('themeName') || THEMES.BASIC,
    };
};
