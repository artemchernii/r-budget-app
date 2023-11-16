import styled from 'styled-components';

const BalanceDiv = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color};
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;
`;
BalanceDiv.displayName = 'BalanceWrapper';
export { BalanceDiv };
