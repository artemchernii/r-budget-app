/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import { BalanceDiv } from './style';
export default function Balance({ balance, currency }) {
    return (
        <div>
            <BalanceDiv
                title="balance"
                data-title="balance"
                data-testid="balance"
            >
                Current balance: {balance} {currency}
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
