import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Form from './index';

describe('Form component', () => {
    test('should show transaction', () => {
        const props = {
            value: 23,
            comment: 'Test comment',
            date: '01.01.2022',
        };
        const form = render(<Form {...props} />);
        expect(form).toMatchSnapshot();
    });
});
