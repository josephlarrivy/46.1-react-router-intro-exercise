import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="NavBar">

            <NavLink exact to="/">
                VendingMachine
            </NavLink>

            <NavLink exact to="/chips">
                chips
            </NavLink>

            <NavLink exact to="/candy">
                candy
            </NavLink>

            <NavLink exact to="/soda">
                soda
            </NavLink>
        </nav>
    );
}

export default NavBar;