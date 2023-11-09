import { describe, expect, it } from 'vitest';
import { useBooleanToggle } from '../hooks/hooks';
import { renderHook, act } from '@testing-library/react';

describe('useBooleanHook', () => {
    it('should handle toggle', () => {
        const { result } = renderHook(() => useBooleanToggle(false));
        expect(result.current.state).toBe(false);
        act(() => result.current.handleState());
        expect(result.current.state).toBe(true);
    });
});
