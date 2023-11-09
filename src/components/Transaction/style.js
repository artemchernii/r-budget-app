import styled from 'styled-components';

const TransactionWrapper = styled.div`
    background-color: ${({ value }) => (value < 0 ? '#72757e' : '#16161a')};
    /* border: 1px solid #dbdbdb; */
    border-radius: 5px;
    padding: 5px;
    /* margin-bottom: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffffe;
`;
TransactionWrapper.displayName = 'TransactionWrapper';

const TransactionDate = styled.div`
    flex-grow: 1;
`;
TransactionDate.displayName = 'Date';
const TransactionValue = styled.div`
    flex-grow: 1;
`;
TransactionValue.displayName = 'Value';
const TransactionComment = styled.div`
    flex-grow: 2;
`;
TransactionComment.displayName = 'CoTransactionComment';

const Icon = styled.span`
    img {
        width: 30px;
        margin-right: 10px;

        &:hover {
            cursor: pointer;
        }
    }
`;

Icon.displayName = 'Icon';

export {
    TransactionWrapper,
    TransactionDate,
    TransactionValue,
    TransactionComment,
    Icon,
};
