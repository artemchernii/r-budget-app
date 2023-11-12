import { render, screen } from '@testing-library/react';
import Profile from './PropsTestingRTL';
import { vi, beforeEach, describe, expect, test } from 'vitest';

vi.mock('./PermissionsContainer.jsx', () => {
    return {
        default: ({ profileId }) => `Hello here is the prop: ${profileId}`,
    };
});

describe('Profile', () => {
    const renderProfile = () =>
        render(
            <Profile
                firstName="John"
                lastName="Doe"
                age={35}
                profileId="1234-fake-5678-uuid"
            />
        );

    beforeEach(() => renderProfile());

    test('renders app', () => {
        const content = screen.getByText(/John Doe/i);
        screen.debug();
        expect(content).toBeInTheDocument();
    });
});
