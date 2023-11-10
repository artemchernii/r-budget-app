/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import style from './style.module.css';
import {
    TransactionWrapper,
    TransactionDate,
    TransactionValue,
    TransactionComment,
    Icon,
} from './style';
import { useContext } from 'react';
import { currencyContext } from '../../providers/context/defaultContext';
import star from '../../assets/star.svg';
import lightStar from '../../assets/light-star.svg';
export default function Transaction({
    value,
    date,
    comment,
    id,
    onDelete,
    isFavoured,
    onFavouredClick,
}) {
    const { currency } = useContext(currencyContext).state;

    const handleDelete = () => {
        onDelete(id);
    };
    return (
        <TransactionWrapper
            data-testid="transaction"
            value={value}
            className={style.transaction}
        >
            <Icon onClick={() => onFavouredClick(id)}>
                <img src={isFavoured ? lightStar : star} alt="star" />
            </Icon>
            <TransactionValue data-testid="Value">
                {value.toFixed(2)}{' '}
                {currency === 'UAH' ? '₴' : currency === 'USD' ? '$' : '€'}
            </TransactionValue>
            <TransactionDate>{date}</TransactionDate>
            <TransactionComment>{comment}</TransactionComment>
            <button onClick={handleDelete}>Delete</button>
        </TransactionWrapper>
    );
}

Transaction.propTypes = {
    label: propTypes.string,
    value: propTypes.number,
    date: propTypes.string,
    comment: propTypes.string,
    id: propTypes.number,
    onDelete: propTypes.func,
    onFavouredClick: propTypes.func,
};
Transaction.defaultProps = {
    label: '',
    value: 0,
    date: null,
};
