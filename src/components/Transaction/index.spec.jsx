import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import Transaction from './Index/';
import { cleanup, render, screen } from '@testing-library/react';
import { CurrencyProvider } from '../../providers/context';

describe('Transaction component', () => {
    let sut;
    let props;

    afterEach(() => {
        cleanup();
    });
    beforeEach(() => {
        props = {
            value: 23,
            comment: 'test comment',
            date: '01.01.2002',
        };
    });
    it('should match transaction', () => {
        expect(sut).toMatchSnapshot();
    });
    it('should show 2 zeros after amount', () => {
        sut = render(
            <CurrencyProvider>
                <Transaction {...props} />
            </CurrencyProvider>
        );
        const value = screen.getByTestId('Value').textContent;
        expect(value).toBe('23.00 ₴');
    });
});
