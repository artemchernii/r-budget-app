import { NavLink } from 'react-router-dom';
import { NavbarStyles, UlStyles, NavLinkStyles } from './style';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const Header = () => {
    return (
        <NavbarStyles>
            <UlStyles>
                <NavLinkStyles>
                    <NavLink
                        to={`/`}
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Home
                    </NavLink>
                </NavLinkStyles>
                <NavLinkStyles>
                    <NavLink
                        to={`/about`}
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        About
                    </NavLink>
                </NavLinkStyles>
                <NavLinkStyles>
                    <NavLink
                        to={`/stats`}
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Stats
                    </NavLink>
                </NavLinkStyles>
                <NavLinkStyles>
                    <NavLink
                        to={`/settings`}
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        Settings
                    </NavLink>
                </NavLinkStyles>
            </UlStyles>
            <ThemeSwitch />
        </NavbarStyles>
    );
};
export default Header;
