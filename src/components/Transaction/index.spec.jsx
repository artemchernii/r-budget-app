import { beforeEach, describe, expect, it } from 'vitest';
import Transaction from './Index/';
import { render, screen } from '@testing-library/react';

describe('Transaction component', () => {
    let sut;
    let props;

    beforeEach(() => {
        props = {
            value: 23,
            comment: 'test comment',
            date: '01.01.2002',
        };
        sut = render(<Transaction {...props} />).findBy;
    });
    it('should match transaction', () => {
        expect(sut).toMatchSnapshot();
    });

    it('should show 2 zeros after amount', () => {
        const value = screen.getByTestId('Value').textContent;
        console.log('value', value);
        expect(value).toBe('23.00');
    });
});
