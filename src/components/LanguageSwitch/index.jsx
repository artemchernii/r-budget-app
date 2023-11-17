/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { LOCALES } from '../../providers/i18n';
import { ACTIONS, stateContext } from '../../providers/context/defaultContext';
import { LanguageSwitchWrapper } from './style';

import ua from '../../assets/ukraine.png';
import us from '../../assets/united-states.png';
import { FormattedMessage } from 'react-intl';
import { saveToStorage } from '../../utils/sessionStorage';

const LanguageSwitch = ({ isInSettings }) => {
    const { state, dispatch } = useContext(stateContext);
    const [locale, setLocale] = useState(state.locale);

    const onSwitchLanguage = (e) => {
        setLocale(e.target.value);
        saveToStorage('locale', e.target.value);
        dispatch({ type: ACTIONS.SET_LOCALE, payload: e.target.value });
    };

    return (
        <LanguageSwitchWrapper>
            {isInSettings && (
                <h3>
                    <FormattedMessage id="language" />
                </h3>
            )}
            <select
                name="locale"
                id="locale"
                value={locale}
                onChange={(e) => onSwitchLanguage(e)}
            >
                <option value={LOCALES.UKRAINIAN}>UA</option>
                <option value={LOCALES.ENGLISH}>US</option>
            </select>

            <img
                src={locale === LOCALES.UKRAINIAN ? ua : us}
                alt={
                    locale === LOCALES.UKRAINIAN
                        ? LOCALES.UKRAINIAN
                        : LOCALES.ENGLISH
                }
            />
        </LanguageSwitchWrapper>
    );
};

export default LanguageSwitch;
