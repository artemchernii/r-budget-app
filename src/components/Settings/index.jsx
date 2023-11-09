import { Fragment, useContext, useState } from 'react';
import {
    ACTIONS,
    currencyContext,
} from '../../providers/context/defaultContext';
import { useBooleanToggle } from '../../hooks/hooks';

const Settings = () => {
    const { state, dispatch } = useContext(currencyContext);
    const [selectedCurrency, setSelectedCurrency] = useState(state.currency);
    const { isAdvancedSettingsShown, setIsAdvancedSettingsShown } =
        useBooleanToggle();

    const handleSubmitSettings = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.CHANGE, payload: selectedCurrency });
    };

    return (
        <Fragment>
            <h1>Settings</h1>
            <div>
                <form onSubmit={handleSubmitSettings}>
                    <label htmlFor="currency">Currency:</label>
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
                    <button type="submit">Save settings</button>
                </form>
                <button onClick={() => setIsAdvancedSettingsShown((c) => !c)}>
                    Show advanced settings
                </button>
                {isAdvancedSettingsShown ? (
                    <div>
                        <h2>Advanced settings</h2>
                        <p>...</p>
                    </div>
                ) : null}
            </div>
        </Fragment>
    );
};

export default Settings;
