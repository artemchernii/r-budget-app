import { useContext, useState } from 'react';
import { ACTIONS, stateContext } from '../../providers/context/defaultContext';
import { useBooleanToggle } from '../../hooks/hooks';
import { Button } from '../App/style';
import { SettingsWrapper } from './style';
import LanguageSwitch from '../LanguageSwitch';
import { FormattedMessage } from 'react-intl';

const Settings = () => {
    const { state, dispatch } = useContext(stateContext);
    const [selectedCurrency, setSelectedCurrency] = useState(state.currency);
    const [selectedTheme, setSelectedTheme] = useState(state.theme);
    const {
        state: isAdvancedSettingsShown,
        handleState: setIsAdvancedSettingsShown,
    } = useBooleanToggle();

    const handleSubmitSettings = (e) => {
        e.preventDefault();
        if (selectedCurrency !== state.currency)
            dispatch({
                type: ACTIONS.CHANGE_CURRENCY,
                payload: selectedCurrency,
            });

        if (selectedTheme !== state.theme)
            dispatch({ type: ACTIONS.SET_THEME, payload: selectedTheme });
    };

    return (
        <SettingsWrapper>
            <h1>
                <FormattedMessage id="settings.title" />
            </h1>

            <form onSubmit={handleSubmitSettings}>
                <label htmlFor="currency">
                    <FormattedMessage id="settings.currency" />:{' '}
                </label>
                <select
                    name="currency"
                    id="currency"
                    onChange={(e) => setSelectedCurrency(e.target.value)}
                    value={selectedCurrency}
                >
                    <option value={'UAH'}>UAH</option>
                    <option value={'USD'}>USD</option>
                    <option value={'EUR'}>EUR</option>
                </select>
                <label htmlFor="theme">
                    <FormattedMessage id="theme.title" />:{' '}
                </label>
                <select
                    name="theme"
                    id="theme"
                    onChange={(e) => setSelectedTheme(e.target.value)}
                    value={selectedTheme}
                >
                    <option value={'BASIC'}>
                        <FormattedMessage id="theme.basic" />
                    </option>
                    <option value={'DARK'}>
                        <FormattedMessage id="theme.dark" />
                    </option>
                    <option value={'LIGHT'}>
                        <FormattedMessage id="theme.light" />
                    </option>
                </select>
                <Button type="submit">
                    <FormattedMessage id="button.save" />
                </Button>
            </form>
            <Button onClick={() => setIsAdvancedSettingsShown((c) => !c)}>
                <FormattedMessage id="settings.advancedSettings" />
            </Button>
            {isAdvancedSettingsShown ? (
                <div>
                    <LanguageSwitch isInSettings />
                </div>
            ) : null}
        </SettingsWrapper>
    );
};

export default Settings;
