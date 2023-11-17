import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
`;
Wrapper.displayName = 'Wrapper';

const FlexWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Button = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #7f5af0;
    color: #fffffe;
    font-weight: bold;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
        border-color: #646cff;
    }

    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`;

Button.displayName = 'Button';

FlexWrapper.displayName = 'FlexWrapper';

export { Wrapper, FlexWrapper, Button };
