import { useContext } from 'react';
import { THEMES } from '../../providers/themes/themeList';
import { ACTIONS, stateContext } from '../../providers/context/defaultContext';
import moon_light from '../../assets/moon_light.png';
import sun_light from '../../assets/sun_light.png';
import moon_dark from '../../assets/moon_dark.png';
import sun_dark from '../../assets/sun_dark.png';
import { saveToStorage } from '../../utils/sessionStorage';
import { ThemeSwitcher } from '../Header/style';

const ThemeSwitch = () => {
    const {
        state: { theme },
        dispatch,
    } = useContext(stateContext);
    const setTheme = (themeName) => {
        dispatch({
            type: ACTIONS.SET_THEME,
            payload: themeName,
        });

        saveToStorage('themeName', themeName);
    };
    return (
        <div className="switch-theme">
            <ThemeSwitcher
                onClick={() => setTheme(THEMES.DARK)}
                active={THEMES.DARK === theme ? 'selected' : ''}
            >
                <img
                    src={theme === THEMES.LIGHT ? moon_dark : moon_light}
                    alt="Dark theme"
                />
            </ThemeSwitcher>
            <ThemeSwitcher
                onClick={() => setTheme(THEMES.LIGHT)}
                active={THEMES.LIGHT === theme ? 'selected' : ''}
            >
                <img
                    src={theme === THEMES.LIGHT ? sun_dark : sun_light}
                    alt="Light theme"
                />
            </ThemeSwitcher>
        </div>
    );
};

export default ThemeSwitch;
