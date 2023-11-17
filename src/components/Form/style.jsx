import styled from 'styled-components';
import { THEMES } from '../../providers/themes/themeList';

const FormWrapper = styled.form`
    padding: 20px;
    width: 50%;
    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 3px;

    .input-container {
        position: relative;
        margin-bottom: 20px;
    }

    /* Style the input field */
    .material-input {
        font-size: 18px;
        padding: 10px;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
        background-color: transparent;
        transition: border-bottom-color 0.3s;
        color: ${({ theme }) => theme.color};
    }

    .material-input:focus {
        outline: none;
        border-bottom-color: #ccc;
    }

    .material-label {
        position: absolute;
        left: 10px;
        top: 10px;
        font-size: 16px;
        color: ${({ currentTheme }) =>
            currentTheme === THEMES.LIGHT ? '#000' : '#888'};
        pointer-events: none;
        transition: top 0.3s, font-size 0.3s;
    }

    .material-input:focus + .material-label,
    .material-input:not(:placeholder-shown) + .material-label {
        top: -10px;
        font-size: 14px;
        color: ${({ currentTheme }) =>
            currentTheme === THEMES.LIGHT ? '#000' : '#888'};
    }
`;

FormWrapper.displayName = 'FormWrapper';

export { FormWrapper };
