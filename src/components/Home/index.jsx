import { useCallback, useContext, useEffect, useState } from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions/Transactions';
import Form from '../Form';
import { HomeDiv } from './style';
import ErrorBoundary from '../ErrorBoundaries';
import { addItem, getItems } from '../../utils/indexdb';
import {
    ACTIONS,
    currencyContext,
} from '../../providers/context/defaultContext';

export default function Home() {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const {
        state: { currency },
        dispatch,
    } = useContext(currencyContext);

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
            isFavoured: false,
        };

        setBalance((c) => c + +balance);
        setTransactions((currentTransactions) => [
            transaction,
            ...currentTransactions,
        ]);
        addItem(transaction);
    };
    const handleChangeCurrency = () => {
        dispatch({
            type: ACTIONS.CHANGE,
            payload: 'USD',
        });
    };

    const onDelete = useCallback(
        (id) => {
            setTransactions((transactions) =>
                transactions.filter((t) => {
                    return t.id !== id;
                })
            );
        },
        [setTransactions]
    );
    const onFavouredClick = (id) => {
        setTransactions((currentTransactions) =>
            currentTransactions.map((t) =>
                t.id === id ? { ...t, isFavoured: !t.isFavoured } : t
            )
        );
    };
    return (
        <ErrorBoundary>
            <HomeDiv>
                <Balance
                    data-testid="balance"
                    balance={+balance}
                    currency={currency}
                />

                <div
                    className="flex"
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        margin: '30px 0',
                    }}
                >
                    <button onClick={handleChangeCurrency}>
                        Change currency
                    </button>
                </div>

                <Form handleSubmit={handleSubmit} />
                {transactions.length > 0 && (
                    <Transactions
                        transactions={transactions}
                        onDelete={onDelete}
                        onFavouredClick={onFavouredClick}
                    />
                )}
            </HomeDiv>
        </ErrorBoundary>
    );
}
