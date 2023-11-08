import { useEffect, useState } from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions/Transactions';
import Form from '../Form';
import { HomeDiv } from './style';
import ErrorBoundary from '../ErrorBoundaries';
import { addItem, getItems } from '../../utils/indexdb';

export default function Home() {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        getItems()
            .then((items) => {
                setBalance(
                    items.reduce((acc, item) => {
                        return Number(acc) + +item.value;
                    }, 0)
                );
                setTransactions(items);
            })
            .catch((e) => {
                console.log('error here', e);
                return console.error(e);
            });
    }, [setTransactions]);

    const handleSubmit = ({ balance, date, comment }) => {
        const transaction = {
            label: 'Balance increased by',
            value: +balance,
            date,
            comment,
            id: Date.now(),
        };

        setBalance((c) => c + +balance);
        setTransactions((currentTransactions) => [
            transaction,
            ...currentTransactions,
        ]);
        addItem(transaction);
    };
    return (
        <ErrorBoundary>
            <HomeDiv>
                <Balance data-testid="balance" balance={+balance} />
                <Form handleSubmit={handleSubmit} />
                {transactions.length > 0 && (
                    <Transactions transactions={transactions} />
                )}
            </HomeDiv>
        </ErrorBoundary>
    );
}
