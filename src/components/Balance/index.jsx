/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import { BalanceDiv } from './style';
import { FormattedNumber, FormattedMessage } from 'react-intl';
export default function Balance({ balance, currency }) {
    return (
        <div>
            <BalanceDiv
                title="balance"
                data-title="balance"
                data-testid="balance"
            >
                <FormattedMessage id="balance.current" />
                <FormattedNumber
                    value={balance}
                    style="currency"
                    currency={currency}
                />
            </BalanceDiv>
        </div>
    );
}

Balance.propTypes = {
    balance: propTypes.number.isRequired,
    currency: propTypes.string,
};

Balance.defaultProp = {
    balance: 0,
    currency: 'UAH',
};
