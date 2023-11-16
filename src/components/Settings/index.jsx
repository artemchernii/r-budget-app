import { Fragment, useContext, useState } from 'react';
import { ACTIONS, stateContext } from '../../providers/context/defaultContext';
import { useBooleanToggle } from '../../hooks/hooks';
import { Wrapper } from '../App/style';

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
        <Fragment>
            <Wrapper>
                <h1>Settings</h1>
                <div>
                    <form onSubmit={handleSubmitSettings}>
                        <label htmlFor="currency">Currency:</label>
                        <select
                            name="currency"
                            id="currency"
                            onChange={(e) =>
                                setSelectedCurrency(e.target.value)
                            }
                            value={selectedCurrency}
                        >
                            <option value={'UAH'}>UAH</option>
                            <option value={'USD'}>USD</option>
                            <option value={'EUR'}>EUR</option>
                        </select>
                        <label htmlFor="theme">Theme:</label>
                        <select
                            name="theme"
                            id="theme"
                            onChange={(e) => setSelectedTheme(e.target.value)}
                            value={selectedTheme}
                        >
                            <option value={'BASIC'}>BASIC</option>
                            <option value={'DARK'}>DARK</option>
                            <option value={'LIGHT'}>LIGHT</option>
                        </select>
                        <button type="submit">Save settings</button>
                    </form>
                    <button
                        onClick={() => setIsAdvancedSettingsShown((c) => !c)}
                    >
                        Show advanced settings
                    </button>
                    {isAdvancedSettingsShown ? (
                        <div>
                            <h2>Advanced settings</h2>
                            <p>...</p>
                        </div>
                    ) : null}
                </div>
            </Wrapper>
        </Fragment>
    );
};

export default Settings;
