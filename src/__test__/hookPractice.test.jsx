// import { act, renderHook } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import { CounterStepProvider, useCounter } from '../hooks/testingHookPractice';

describe('hook practice', () => {
    it('should return initial value', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.state).toBe(0);
    });
    it('should increment state by 1 without provider', () => {
        const { result } = renderHook(() => useCounter());
        act(() => result.current.increment());
        expect(result.current.state).toBe(1);
    });
    it('should use custom step when incrementing', () => {
        const wrapper = ({ children }) => (
            <CounterStepProvider step={2}>{children}</CounterStepProvider>
        );
        const { result } = renderHook(() => useCounter(), { wrapper });

        act(() => {
            result.current.increment();
        });

        expect(result.current.state).toBe(2);
    });
    it('should increment with custom initial value', () => {
        const wrapper = ({ children, step = 4 }) => (
            <CounterStepProvider step={step}>{children}</CounterStepProvider>
        );
        let initialValue = 4;
        const { result, rerender } = renderHook(
            () => useCounter(initialValue),
            {
                wrapper,
            }
        );
        initialValue = 10;
        rerender();
        act(() => {
            result.current.reset();
        });
        expect(result.current.state).toBe(10);
    });
    it('should return state with custom initial value', () => {
        const { result } = renderHook(useCounter, { initialProps: 10 });

        expect(result.current.state).toBe(10);
    });
});
