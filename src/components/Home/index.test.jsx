import { beforeEach, describe, expect, it, vi } from 'vitest';
import Home from './index';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { getItems } from '../../utils/indexdb';

vi.mock('../../utils/indexdb', () => ({
    addItem: vi.fn(),
    getItems: vi
        .fn()
        .mockImplementation(() =>
            Promise.resolve([{ value: 100, id: '123123EEWQEQWEQ123123' }])
        ),
}));

describe('Home component', () => {
    let props;
    let sut;
    let container;

    beforeEach(async () => {
        await act(async () => {
            sut = render(<Home {...props} />);
        });
        container = sut.container;
    });

    describe('when transactions are returned successfully', () => {
        it('should render transactions', () => {
            expect(screen.getByTitle('transactions')).toBeInTheDocument();
        });
        it('should render transaction with one item with value got from db', async () => {
            await waitFor(() => {
                expect(screen.getByTestId('Value').textContent).toBe('100.00');
            });
        });
    });

    describe('when transaction is added', () => {
        it('should increase the balance', () => {
            const submit = sut.getByText('Save');
            const balanceInput = container.querySelector('[name="balance"]');
            const balanceContainer = sut.getByTestId('balance');
            fireEvent.change(balanceInput, { target: { value: 100 } });
            fireEvent.submit(submit);
            expect(balanceContainer.textContent).toBe('Current balance: 200');
        });
    });

    describe('when transactions are returned with error', () => {
        let consoleSpy;
        beforeEach(() => {
            consoleSpy = vi.spyOn(console, 'error');
            getItems.mockImplementation(() => Promise.reject('WTF'));
        });
        beforeEach(async () => {
            await act(async () => {
                sut = render(<Home {...props} />);
            });
            container = sut.container;
        });
        it('should throw an error', () => {
            expect(consoleSpy).toHaveBeenCalledWith('WTF');
        });
        it('should return transactions with zero items', () => {
            expect(screen.getByTitle('transactions')).toBeUndefined();
        });
    });
});
