import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;
Wrapper.displayName = 'Wrapper';

const FlexWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

FlexWrapper.displayName = 'FlexWrapper';

export { Wrapper, FlexWrapper };
