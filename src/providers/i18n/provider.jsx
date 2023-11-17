/* eslint-disable react/prop-types */
import { IntlProvider } from 'react-intl';
import { useContext } from 'react';
import { stateContext } from '../context/defaultContext';

import messages from './messages';
import { LOCALES } from './constants';
import { flatten } from 'flat';

const IntlAppProvider = ({ children }) => {
    const { state } = useContext(stateContext);
    return (
        <IntlProvider
            messages={flatten(messages[state.locale])}
            locale={state.locale}
            defaultLocale={LOCALES.ENGLISH}
        >
            {children}
        </IntlProvider>
    );
};

export { IntlAppProvider };
