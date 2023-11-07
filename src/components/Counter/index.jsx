import { Fragment, useEffect, useState } from 'react';

const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        console.log('on mount');
    }, []);

    useEffect(() => {
        console.log('step changed');
    }, [step]);

    const onDelayShow = () =>
        setTimeout(() => {
            alert(clicks);
        }, 3000);
    return (
        <Fragment>
            <div>Clicked: {clicks}</div>
            <button onClick={() => setClicks((c) => c + step)}>Click</button>
            <br />
            <input
                type="text"
                value={step}
                onChange={(e) => setStep(+e.target.value)}
            />
            <br />
            <button style={{ marginTop: '10px' }} onClick={onDelayShow}>
                Show values with 3s delay
            </button>
        </Fragment>
    );
};

export default Counter;
