import propTypes from 'prop-types';
import Transaction from '../Transaction/Index';
import { TransactionList } from './style';

const Transactions = ({ transactions = [] }) => {
    return (
        <TransactionList
            additionalprop={'rounded'}
            title="transactions"
            color={'#fff'}
        >
            {transactions.map((t) => (
                <Transaction
                    key={t.id}
                    label={t.label}
                    value={+t.value}
                    comment={t.comment}
                    date={t.date}
                />
            ))}
        </TransactionList>
    );
};

export default Transactions;

Transactions.propTypes = {
    transactions: propTypes.array,
};
