import { NavLink } from 'react-router-dom';
import { NavbarStyles, UlStyles, NavLinkStyles } from './style';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch';
import { FormattedMessage } from 'react-intl';

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
                        <FormattedMessage id="menu.home" />
                    </NavLink>
                </NavLinkStyles>
                <NavLinkStyles>
                    <NavLink
                        to={`/about`}
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        <FormattedMessage id="menu.about" />
                    </NavLink>
                </NavLinkStyles>
                <NavLinkStyles>
                    <NavLink
                        to={`/stats`}
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        <FormattedMessage id="menu.stats" />
                    </NavLink>
                </NavLinkStyles>
                <NavLinkStyles>
                    <NavLink
                        to={`/settings`}
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        <FormattedMessage id="menu.settings" />
                    </NavLink>
                </NavLinkStyles>
            </UlStyles>
            <ThemeSwitch />
            <LanguageSwitch />
        </NavbarStyles>
    );
};
export default Header;
