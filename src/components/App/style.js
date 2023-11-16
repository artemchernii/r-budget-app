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

FlexWrapper.displayName = 'FlexWrapper';

export { Wrapper, FlexWrapper };
