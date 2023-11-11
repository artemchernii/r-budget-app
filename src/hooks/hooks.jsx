import { useCallback, useEffect, useState } from 'react';
import { STATUS } from '../constants';
import { addItem, getItems, deleteItem, setFavor } from '../utils/indexdb';

export const useBooleanToggle = (defaultValue = false) => {
    const [state, setState] = useState(defaultValue);

    const handleState = () => {
        setState((currentState) => !currentState);
    };

    return { state, handleState };
};

export const useData = () => {
    const [state, setState] = useState({
        balance: 0,
        transactions: [],
        error: null,
        status: STATUS.idle,
    });

    useEffect(() => {
        setState((currentState) => ({
            ...currentState,
            status: STATUS.pending,
        }));
        getItems()
            .then((items) => {
                setState((currentState) => {
                    return {
                        ...currentState,
                        balance: items.reduce((acc, item) => {
                            return Number(acc) + +item.value;
                        }, 0),
                        transactions: items,
                        status: STATUS.success,
                    };
                });
            })
            .catch((e) => {
                console.log('error here', e);
                setState((currentStatus) => {
                    return {
                        ...currentStatus,
                        transactions: [],
                        error: e,
                        status: STATUS.error,
                    };
                });
                return console.error(e);
            });
    }, []);

    const addTransaction = useCallback(
        (transaction) => {
            setState((currentState) => ({
                ...currentState,
                transactions: [transaction, ...currentState.transactions],
                balance: currentState.balance + transaction.value,
            }));
            addItem(transaction);
        },
        [setState]
    );

    const deleteTransaction = useCallback(
        (id) => {
            setState((currentState) => ({
                ...currentState,
                transactions: currentState.transactions.filter(
                    (t) => t.id !== id
                ),
            }));
            deleteItem(id);
        },
        [setState]
    );

    const favorTransaction = useCallback(
        (id) => {
            setState((currentState) => ({
                ...currentState,
                transactions: currentState.transactions.map((t) =>
                    t.id === id ? { ...t, isFavoured: !t.isFavoured } : t
                ),
            }));
            setFavor(id);
        },
        [setState]
    );

    return { ...state, addTransaction, deleteTransaction, favorTransaction };
};
