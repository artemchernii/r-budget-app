import styled, { css } from 'styled-components'


const TransactionList = styled.div`
  background: ${({color}) => color ? '#BF4F74' : 'transparent'};
  border-radius: ${({additionalprop}) => additionalprop === 'rounded' ? '10px' : '0'};
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;


  ${({color}) =>
    color === true &&
    css`
      color: white;
      font-style: italic;
    `};
`
TransactionList.displayName = 'TransactionList';
export {TransactionList}