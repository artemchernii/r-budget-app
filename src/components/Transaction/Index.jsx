/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import style from './style.module.css';
import {
    TransactionWrapper,
    TransactionDate,
    TransactionValue,
    TransactionComment,
} from './style';
import { useContext } from 'react';
import { currencyContext } from '../../providers/context/defaultContext';
export default function Transaction({ value, date, comment }) {
    const { currency } = useContext(currencyContext).state;
    return (
        <TransactionWrapper
            data-testid="transaction"
            value={value}
            className={style.transaction}
        >
            <TransactionValue data-testid="Value">
                {value.toFixed(2)} {currency === 'UAH' ? '₴' : '$'}
            </TransactionValue>
            <TransactionDate>{date}</TransactionDate>
            <TransactionComment>{comment}</TransactionComment>
        </TransactionWrapper>
    );
}

Transaction.propTypes = {
    label: propTypes.string,
    value: propTypes.number,
    date: propTypes.string,
    comment: propTypes.string,
};
Transaction.defaultProps = {
    label: '',
    value: 0,
    date: null,
};
