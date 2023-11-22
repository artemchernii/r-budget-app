import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }
    /* width */
    ::-webkit-scrollbar {
        padding-top: 5px;
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        /* box-shadow: inset 0 0 5px grey; */
        /* border-radius: 10px; */
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #94a1b2;
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #7f5af0;
        
    }
`;
export const Home = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

Home.displayName = 'Home';
