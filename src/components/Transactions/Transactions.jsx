import propTypes from 'prop-types'
import Transaction from "../Transaction/Index";
import {TransactionList} from './style'

const Transactions = ({transactions = []}) =>  {
    return (
        <TransactionList additionalprop={'rounded'} color={'#fff'}>
            {
                transactions.map((t, index) => <Transaction key={index} label={t.label} value={+t.value} comment={t.comment} date={t.date} />)
            }
        </TransactionList>
    )
}

export default Transactions;

Transactions.propTypes = {
    transactions: propTypes.array
}