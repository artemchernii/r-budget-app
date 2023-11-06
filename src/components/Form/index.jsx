import propTypes from 'prop-types';
import { Component } from "react";
import './style.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            balance: 0,
            date: new Date().toISOString().substring(0,10),
            comment: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        setTimeout(() => {
            this.setState({
                balance: 0,
                date: new Date().toISOString().substring(0,10),
                comment: ''
            })
        }, 400);
    }
    handleBalanceChange = (e) => {
        const {name, value, type} = e.target;
        this.setState({...this.state, [name]: type === 'number' ? +value : value})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-container">
                    <input type='date' className="material-input" required name="date"
                        value={this.state.date}
                        onChange={this.handleBalanceChange}
                    />
                    <label className="material-label">Date</label>
                </div>
                <div className="input-container">
                    <input type="number" className="material-input" required name="balance"
                        value={this.state.balance}
                        onChange={this.handleBalanceChange}
                    />
                    <label className="material-label">New sum</label>
                </div>
                <div className="input-container">
                    <textarea className="material-input" required name="comment"
                        value={this.state.comment}
                        onChange={this.handleBalanceChange}
                    />
                    <label className="material-label">Comment</label>
                </div>
                <button type="submit">Save</button>
            </form>
        )
    }
}


Form.propTypes = {
    onChange: propTypes.func
}
Form.defaultProp = {
    onChange: () => {}
}

export default Form;


