import { useState } from 'react';

const useBooleanToggle = (defaultValue = false) => {
    const [state, setState] = useState(defaultValue);

    const handleState = () => {
        console.log('handle state', state);
        setState((currentState) => !currentState);
    };

    return { state, handleState };
};

export { useBooleanToggle };
