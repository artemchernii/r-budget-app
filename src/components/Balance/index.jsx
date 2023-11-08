/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import { BalanceDiv } from './style';
export default function Balance({ balance }) {
    return (
        <div>
            <BalanceDiv
                title="balance"
                data-title="balance"
                data-testid="balance"
            >
                Current balance: {balance}
            </BalanceDiv>
        </div>
    );
}

Balance.propTypes = {
    balance: propTypes.number.isRequired,
};

Balance.defaultProp = {
    balance: 0,
};
