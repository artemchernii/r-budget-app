/* eslint-disable react/prop-types */
import React, { useState, useContext, useCallback } from 'react';

const CounterStepContext = React.createContext(1);

export const CounterStepProvider = ({ step, children }) => (
    <CounterStepContext.Provider value={step}>
        {children}
    </CounterStepContext.Provider>
);

export function useCounter(initialValue = 0) {
    const [state, setState] = useState(initialValue);
    const step = useContext(CounterStepContext);
    const increment = useCallback(() => setState((x) => x + step), [step]);
    const reset = useCallback(() => setState(initialValue), [initialValue]);
    return { state, increment, reset };
}
