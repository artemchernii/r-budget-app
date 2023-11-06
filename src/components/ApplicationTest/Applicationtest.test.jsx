import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import ApplicationForm from './Applicationtest';

test('render correctly', () => {
    const { getByRole } = render(<ApplicationForm />);
    // const titleElement = screen.getRoleBy('heading');
    const titleElement = getByRole('heading');
    expect(titleElement).toBeInTheDocument();
});
test('render correctly', () => {
    render(<ApplicationForm />);
    const titleElement = screen.getByRole('heading');
    expect(titleElement).toBeInTheDocument();
});
