import styled from 'styled-components';

export const NavbarStyles = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
    padding: 10px 20px;

    .switch-theme {
        display: flex;
        justify-content: center;
        align-items: center;
        span {
        }
    }
`;
export const UlStyles = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0;
    margin: 0;
`;
export const NavLinkStyles = styled.li`
    text-decoration: none;
    padding: 10px 20px;
    transition: background-color 0.3s;

    a {
        color: ${({ theme }) => theme.color};
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

export const ThemeSwitcher = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background-color: ${({ active }) =>
        active === 'selected' ? '#2cb67d' : '#fffffe'};
    border: 1px solid
        ${({ active }) => (active === 'selected' ? '#2cb67d' : '#16161a')};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 2px;

    cursor: ${({ active }) =>
        active === 'selected' ? 'not-allowed' : 'pointer'};

    &:hover {
        border: 1px solid ${({ theme }) => theme.color};
    }

    img {
        color: ${({ theme }) => theme.color};
        width: 20px;
    }
`;
ThemeSwitcher.displayName = 'ThemeSwitcher';
