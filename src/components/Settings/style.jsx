import styled from 'styled-components';

export const SettingsWrapper = styled.div`
    height: 100%;

    h1 {
        margin: 5px 0;
    }

    select {
        background: transparent;
        border-radius: 5px;
        color: ${({ theme }) => theme.color};
        cursor: pointer;
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        border: 1px solid #333;
        padding: 10px;
        border-radius: 10px;

        label {
            margin: 5px 0;
        }

        input {
            margin: 5px 0;
        }

        button {
            width: 50%;
            margin-top: 10px;
        }
    }
`;

SettingsWrapper.displayName = 'Settings';
