import { Component } from "react";
import Balance from "../Balance";
import Transactions from "../Transactions/Transactions";
import Form from "../Form";
import { HomeDiv } from "./style";
import ErrorBoundary from "../ErrorBoundaries";



class Home extends Component {
    constructor() {
        super()
        this.state = {
            balance: 0,
            transactions: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        const state = JSON.parse(localStorage.getItem('state'));
        if (state) this.setState({...state})
    }
    componentDidUpdate() {
        localStorage.setItem('state', JSON.stringify(this.state))
    }
    componentWillUnmount() {
        console.log('component will unmount || here we want to clean event listeners')
    }

    handleSubmit = ({balance, date, comment}) => {
        this.setState({
            ...this.state,
            balance: this.state.balance + balance,
            transactions: [...this.state.transactions, {label: 'Balance increased by', value: +balance, date, comment}]
        })
    }
    render() {
        console.log('rendering')
        return (
            <ErrorBoundary>
                <HomeDiv>
                    <Balance balance={+this.state.balance} />
                    <Form handleSubmit={this.handleSubmit} />
                    {this.state.transactions.length > 0 && <Transactions transactions={this.state.transactions} />}
                </HomeDiv>
            </ErrorBoundary>
        )
    }
}
export default Home;