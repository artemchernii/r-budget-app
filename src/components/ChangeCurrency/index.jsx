import { useContext } from 'react';
import { ACTIONS, stateContext } from '../../providers/context/defaultContext';
import { Button } from '../App/style';

const ChangeCurrency = () => {
    const { dispatch } = useContext(stateContext);
    const handleChangeCurrency = () => {
        dispatch({
            type: ACTIONS.CHANGE_CURRENCY,
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
            <Button onClick={handleChangeCurrency}>Change to USD</Button>
        </div>
    );
};

export default ChangeCurrency;
