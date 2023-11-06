import styled from 'styled-components';

export const NavbarStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #16161a;
    padding: 10px 20px;
`;
export const UlStyles = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0;
    margin: 0;
`;
export const NavlinkStyles = styled.li`
    text-decoration: none;
    padding: 10px 20px;
    transition: background-color 0.3s;

    a {
        color: #fffffe;
        font-size: 24px;
        letter-spacing: -1px;
    }
    a:hover {
        color: #94a1b2;
    }

    .active {
        color: #2cb67d;
    }
`;
