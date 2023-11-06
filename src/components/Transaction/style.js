import styled from "styled-components";


const TransactionWrapper = styled.div`
    background-color: ${({value}) => value < 0 ? '#e2e1e1' : '#fff'};
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
`
TransactionWrapper.displayName = 'TransactionWrapper';

const TransactionDate = styled.div`
    flex-grow: 1;
`
TransactionDate.displayName = 'Date'
const TransactionValue = styled.div`
    flex-grow: 1;
    `
TransactionValue.displayName = 'Value'
const TransactionComment = styled.div`
    flex-grow: 2;
    `
TransactionComment.displayName = 'CoTransactionComment'

export {TransactionWrapper, TransactionDate, TransactionValue, TransactionComment}