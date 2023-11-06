import { NavLink, Outlet } from "react-router-dom";
import { NavbarStyles, UlStyles, NavlinkStyles } from "./style";

export default function Layout() {
    return (
        <>
            <NavbarStyles>
                <UlStyles>
                    <NavlinkStyles>
                        <NavLink to={`/`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </NavlinkStyles>
                    <NavlinkStyles>
                        <NavLink to={`/about`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            About
                        </NavLink>
                    </NavlinkStyles>
                    <NavlinkStyles>
                        <NavLink to={`/stats`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                            Stats
                        </NavLink>
                    </NavlinkStyles>
                </UlStyles>
            </NavbarStyles>

            <Outlet />
        </>
    )
}