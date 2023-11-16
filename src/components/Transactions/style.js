import styled from 'styled-components';

const TransactionList = styled.div`
    border-radius: ${({ additionalprop }) =>
        additionalprop === 'rounded' ? '2px' : '0'};
    margin: 0 1em;
    padding: 1em;
`;
TransactionList.displayName = 'TransactionList';
export { TransactionList };
