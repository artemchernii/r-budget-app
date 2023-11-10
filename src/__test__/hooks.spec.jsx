import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useBooleanToggle, useData } from '../hooks/hooks';
import { renderHook, act, waitFor } from '@testing-library/react';
import {
    // addItem,
    getItems,
} from '../utils/indexdb';
import { STATUS } from '../constants';

describe('useBooleanHook', () => {
    it('should handle toggle', () => {
        const { result } = renderHook(() => useBooleanToggle(false));
        expect(result.current.state).toBe(false);
        act(() => result.current.handleState());
        expect(result.current.state).toBe(true);
    });
});

describe('useData', () => {
    const mockData = [{ value: 100, id: '123123EEWQEQWEQ123123' }];
    vi.mock('../utils/indexdb.js', () => ({
        getItems: vi.fn(),
        addItem: vi.fn(),
    }));
    beforeEach(() => {
        getItems.mockImplementation(() => Promise.resolve(mockData));
        // addItem.mockImplementation(() => Promise.resolve(mockData));
    });

    it('should return transactions', () => {
        const { result } = renderHook(() => useData());

        expect(result.current.transactions).toEqual([]);
    });

    it('should return data with status PENDING', () => {
        const { result } = renderHook(() => useData());

        expect(result.current.status).toBe(STATUS.pending);
    });
    it('should return transactions with expected data', async () => {
        const { result } = renderHook(() => useData());

        await waitFor(() => {
            expect(result.current.transactions).toBe(mockData);
        });
    });
    it('should return status SUCCESS', async () => {
        const { result } = renderHook(() => useData());

        await waitFor(() => {
            expect(result.current.status).toBe(STATUS.success);
        });
    });
    it('should add new item to transactions', async () => {
        const { result } = renderHook(() => useData());
        const transaction = {
            label: 'Balance increased by',
            value: 1000,
            comment: 'comment',
            id: '11111111111',
            isFavoured: true,
        };
        act(() => result.current.addTransaction(transaction));
        await waitFor(() => {
            expect(result.current.transactions).toHaveLength(2);
        });
    });
});
