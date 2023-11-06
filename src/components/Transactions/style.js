import styled, { css } from 'styled-components';

const TransactionList = styled.div`
    border-radius: ${({ additionalprop }) =>
        additionalprop === 'rounded' ? '2px' : '0'};
    margin: 0 1em;
    padding: 1em;
    background-color: #16161a;

    ${({ color }) =>
        color === true &&
        css`
            color: white;
            font-style: italic;
        `};
`;
TransactionList.displayName = 'TransactionList';
export { TransactionList };
