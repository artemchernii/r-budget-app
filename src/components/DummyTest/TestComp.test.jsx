import { render, screen } from '@testing-library/react';
import MyComponent from './TestComp';
import { describe, expect, test } from 'vitest';

describe('Test dummy component', () => {
    test('renders the component with the correct name', () => {
        const { getByText } = render(<MyComponent name="John" />);
        const element = getByText(/Hello, John!/i);
        expect(element).toBeInTheDocument();
    });
    test('renders the component', () => {
        const { getByText } = render(<MyComponent />);
        const element = getByText(/Hello/i);
        expect(element).toBeInTheDocument();
    });
    test('renders the component with the correct text', () => {
        render(<MyComponent />);

        // Use screen.getByText to find an element by its text content
        // const element = screen.getByText(/Hello/i);
        const element = screen.getByText(/Hello/i);

        // Assert that the element is in the document
        expect(element).toBeInTheDocument();
    });
});
