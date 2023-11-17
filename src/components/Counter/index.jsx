import { Fragment, useEffect, useRef, useState } from 'react';
import { Button } from '../App/style';

const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(1);
    const ref = useRef(null);
    const currentValue = useRef(1);

    useEffect(() => {
        console.log('on mount');
        currentValue.current = clicks;
    }, [clicks]);

    useEffect(() => {
        console.log('step changed');
    }, [step]);

    const onDelayShow = () => {
        ref.current.focus();
        setTimeout(() => {
            console.log(currentValue.current);
            alert(clicks);
        }, 3000);
    };

    return (
        <Fragment>
            <div>Clicked: {clicks}</div>
            <div>{currentValue.current}</div>
            <Button onClick={() => setClicks((c) => c + step)}>Click</Button>
            <br />
            <input
                ref={ref}
                type="text"
                value={step}
                onChange={(e) => setStep(+e.target.value)}
            />
            <br />
            <Button style={{ marginTop: '10px' }} onClick={onDelayShow}>
                Show values with 3s delay
            </Button>
        </Fragment>
    );
};

export default Counter;
