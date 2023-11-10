import { useContext } from 'react';
import {
    ACTIONS,
    currencyContext,
} from '../../providers/context/defaultContext';

const ChangeCurrency = () => {
    const { dispatch } = useContext(currencyContext);
    const handleChangeCurrency = () => {
        dispatch({
            type: ACTIONS.CHANGE,
            payload: 'USD',
        });
    };
    return (
        <div
            className="flex"
            style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                margin: '30px 0',
            }}
        >
            <button onClick={handleChangeCurrency}>Change currency</button>
        </div>
    );
};

export default ChangeCurrency;
