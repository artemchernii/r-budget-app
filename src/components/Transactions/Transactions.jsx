import propTypes from 'prop-types';
import Transaction from '../Transaction/Index';
import { TransactionList } from './style';
import { memo } from 'react';

const Transactions = memo(function Transactions({
    transactions = [],
    onDelete,
    onFavouredClick,
}) {
    return (
        <TransactionList
            additionalprop={'rounded'}
            title="transactions"
            data-testid="transactions"
            color={'#fff'}
        >
            {transactions.map((t) => (
                <Transaction
                    key={t.id}
                    label={t.label}
                    value={+t.value}
                    comment={t.comment}
                    date={t.date}
                    id={t.id}
                    onDelete={onDelete}
                    isFavoured={t.isFavoured}
                    onFavouredClick={onFavouredClick}
                />
            ))}
        </TransactionList>
    );
});

export default Transactions;

Transactions.propTypes = {
    transactions: propTypes.array,
    onDelete: propTypes.func,
    onFavouredClick: propTypes.func,
};
