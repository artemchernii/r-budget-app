import propTypes from 'prop-types';
import { useContext, useState } from 'react';
import { FormWrapper } from './style';
import { stateContext } from '../../providers/context/defaultContext';
import { Button } from '../App/style';
import { FormattedMessage } from 'react-intl';

export default function Form({ handleSubmit }) {
    const [form, setForm] = useState({
        balance: 0,
        date: new Date().toISOString().substring(0, 10),
        comment: '',
    });

    const {
        state: { theme },
    } = useContext(stateContext);

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
        <FormWrapper currenttheme={theme} onSubmit={onSubmit} title="test-form">
            <div className="input-container">
                <input
                    type="date"
                    className="material-input"
                    required
                    name="date"
                    value={form.date}
                    onChange={handleBalanceChange}
                />
                <label className="material-label">
                    <FormattedMessage id="form.date" />
                </label>
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
                    <FormattedMessage id="form.newSum" />
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
                <label className="material-label">
                    <FormattedMessage id="form.comment" />
                </label>
            </div>
            <Button type="submit">
                <FormattedMessage id="button.save" />
            </Button>
        </FormWrapper>
    );
}

Form.propTypes = {
    handleSubmit: propTypes.func,
};
Form.defaultProp = {
    handleSubmit: () => {},
};
