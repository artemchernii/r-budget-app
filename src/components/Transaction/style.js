import styled from 'styled-components';
import { THEMES } from '../../providers/themes/themeList';

const TransactionWrapper = styled.div`
    /* background-color: ${({ value }) =>
        value < 0 ? '#72757e' : '#16161a'}; */
    background-color: ${({ theme }) => theme.background};
    border-radius: 5px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.color};
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
    background-color: ${({ currenttheme }) =>
        currenttheme === THEMES.LIGHT ? '#72757e' : ''};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    padding-bottom: 2px;
    border-radius: 10%;
    img {
        width: 30px;
        height: 30px;

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
