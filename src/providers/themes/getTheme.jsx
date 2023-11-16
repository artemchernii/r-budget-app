import { BASIC, LIGHT, DARK } from './theme';
import { THEMES } from './themeList';

export const getTheme = (themeName) => {
    switch (themeName) {
        case THEMES.LIGHT:
            return LIGHT;
        case THEMES.DARK:
            return DARK;
        default:
            return BASIC;
    }
};
