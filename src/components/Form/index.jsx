import propTypes from 'prop-types';
import { useState } from 'react';
import './style.css';

export default function Form({ handleSubmit }) {
    const [form, setForm] = useState({
        balance: 0,
        date: new Date().toISOString().substring(0, 10),
        comment: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(form);
        setTimeout(() => {
            setForm({
                balance: 0,
                date: new Date().toISOString().substring(0, 10),
                comment: '',
            });
        }, 400);
    };
    const handleBalanceChange = (e) => {
        const { name, value } = e.target;
        setForm((c) => {
            return {
                ...c,
                [name]: value,
                // [name]: type === 'number' ? +value : value,
            };
        });
    };

    return (
        <form onSubmit={onSubmit} title="test-form">
            <div className="input-container">
                <input
                    type="date"
                    className="material-input"
                    required
                    name="date"
                    value={form.date}
                    onChange={handleBalanceChange}
                />
                <label className="material-label">Date</label>
            </div>
            <div className="input-container">
                <input
                    type="number"
                    className="material-input"
                    required
                    name="balance"
                    value={form.balance}
                    onChange={handleBalanceChange}
                    id="balance"
                />
                <label htmlFor="balance" className="material-label">
                    New sum
                </label>
            </div>
            <div className="input-container">
                <textarea
                    className="material-input"
                    required
                    name="comment"
                    value={form.comment}
                    onChange={handleBalanceChange}
                />
                <label className="material-label">Comment</label>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

Form.propTypes = {
    handleSubmit: propTypes.func,
};
Form.defaultProp = {
    handleSubmit: () => {},
};
