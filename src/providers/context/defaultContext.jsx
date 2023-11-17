import { createContext } from 'react';
import { getFromStorage } from '../../utils/sessionStorage';
import { THEMES } from '../themes/themeList';
import { LOCALES } from '../i18n';

export const stateContext = createContext(null);

export const ACTIONS = {
    CHANGE_CURRENCY: 'changeCurrency',
    SET_THEME: 'setTheme',
    SET_LOCALE: 'setLocale',
    RESET: 'resetToDefault',
};
export const defaultContext = () => {
    return {
        currency: 'UAH',
        theme: getFromStorage('themeName') || THEMES.BASIC,
        locale: getFromStorage('locale') || LOCALES.ENGLISH,
    };
};
