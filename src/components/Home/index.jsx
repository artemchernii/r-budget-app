import { Component } from 'react';
import Balance from '../Balance';
import Transactions from '../Transactions/Transactions';
import Form from '../Form';
import { HomeDiv } from './style';
import ErrorBoundary from '../ErrorBoundaries';
import { addItem, getItems } from '../../utils/indexdb';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        getItems()
            .then((transactions) => {
                this.setState({
                    ...this.state,
                    transactions,
                });
            })
            .catch((e) => console.error(e));
    }

    handleSubmit = ({ balance, date, comment }) => {
        const transaction = {
            label: 'Balance increased by',
            value: +balance,
            date,
            comment,
            id: Date.now(),
        };
        this.setState({
            ...this.state,
            balance: this.state.balance + balance,
            transactions: [transaction, ...this.state.transactions],
        });
        addItem(transaction);
    };
    render() {
        console.log('rendering');
        return (
            <ErrorBoundary>
                <HomeDiv>
                    <Balance balance={+this.state.balance} />
                    <Form handleSubmit={this.handleSubmit} />
                    {this.state.transactions.length > 0 && (
                        <Transactions transactions={this.state.transactions} />
                    )}
                </HomeDiv>
            </ErrorBoundary>
        );
    }
}
export default Home;
