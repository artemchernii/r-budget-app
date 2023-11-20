import propTypes from 'prop-types';
import Transaction from '../Transaction/Index';
import { TransactionList } from './style';
import { memo } from 'react';
import { InfiniteLoader, List } from 'react-virtualized';
import 'react-virtualized/styles.css';

const Transactions = memo(function Transactions({
    transactions = [],
    onDelete,
    onFavouredClick,
    isNextPageLoading,
    hasNextPage,
    loadMoreRows,
}) {
    const loadMore = isNextPageLoading ? () => {} : loadMoreRows;

    const remoteRowCount = hasNextPage
        ? transactions.length + 1
        : transactions.length;

    const isRowLoaded = ({ index }) =>
        !hasNextPage || index < transactions.length;

    function rowRenderer({ key, index, style }) {
        if (!transactions[index]) {
            return null;
        }

        return (
            <div key={key} style={style}>
                <Transaction
                    label={transactions[index].label}
                    value={+transactions[index].value}
                    comment={transactions[index].comment}
                    date={transactions[index].date}
                    id={transactions[index].id}
                    onDelete={onDelete}
                    isFavoured={transactions[index].isFavoured}
                    onFavouredClick={onFavouredClick}
                />
            </div>
        );
    }
    return (
        <TransactionList>
            <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMore}
                rowCount={remoteRowCount}
            >
                {({ onRowsRendered, registerChild }) => (
                    <List
                        height={600}
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        rowCount={remoteRowCount}
                        rowHeight={60}
                        rowRenderer={rowRenderer}
                        width={900}
                    />
                )}
            </InfiniteLoader>
        </TransactionList>
    );
});

export default Transactions;

Transactions.propTypes = {
    transactions: propTypes.array,
    onDelete: propTypes.func,
    onFavouredClick: propTypes.func,
    hasNextPage: propTypes.bool,
    isNextPageLoading: propTypes.bool,
    loadMoreRows: propTypes.func,
};
