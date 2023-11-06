import styled from "styled-components";

export const NavbarStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
`
export const UlStyles = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0;
    margin: 0;
`
export const NavlinkStyles = styled.li`
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    transition: background-color 0.3s;

    .active {
        color: tomato;
    }
`
