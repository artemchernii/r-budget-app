import { render, fireEvent } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import Form from './index';

describe('Form component', () => {
    let props;
    let sut;
    let container;

    beforeEach(() => {
        vi.useFakeTimers();
        const currentDate = new Date('2021-01-01T11:49:29.558Z');
        vi.setSystemTime(currentDate);
        props = {
            handleSubmit: vi.fn(),
        };
        sut = render(<Form {...props} />);
        container = sut.container;
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    describe('when edit form', () => {
        test('should change balance input', () => {
            const input = sut.container.querySelector('[name="balance"]');

            fireEvent.change(input, { target: { value: '1000' } });

            const { value } = input;
            expect(+value).toBe(Number(1000));
        });
        test('should change comment input', () => {
            const expectedValue = 'comment test';
            const input = sut.container.querySelector('[name="comment"]');

            fireEvent.change(input, { target: { value: 'comment test' } });

            const { value } = input;
            expect(value).toBe(expectedValue);
        });
    });
    describe('when submit form', () => {
        test('should call onChange form the props', () => {
            const submit = sut.getByText('Save');
            const balance = container.querySelector('[name="balance"]');
            const comment = container.querySelector('[name="comment"]');
            fireEvent.change(balance, { target: { value: '1000' } });
            fireEvent.change(comment, { target: { value: 'comment test' } });
            fireEvent.submit(submit);
            const expectedDate = '2021-01-01';
            expect(props.handleSubmit).toBeCalledWith({
                balance: '1000',
                comment: 'comment test',
                date: expectedDate,
            });
        });
    });
});
