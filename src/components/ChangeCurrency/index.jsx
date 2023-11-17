import { useContext } from 'react';
import { ACTIONS, stateContext } from '../../providers/context/defaultContext';
import { Button } from '../App/style';

const ChangeCurrency = () => {
    const { state, dispatch } = useContext(stateContext);
    const handleChangeCurrency = () => {
        dispatch({
            type: ACTIONS.CHANGE_CURRENCY,
            payload: state.currency === 'UAH' ? 'USD' : 'UAH',
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
            <Button onClick={handleChangeCurrency}>
                Change to {state.currency === 'UAH' ? 'USD' : 'UAH'}
            </Button>
        </div>
    );
};

export default ChangeCurrency;
