import React from 'react';
import { Link } from  'react-router-dom';

const Header = () =>
    (<div>
        <NavLink to="/"
                 exact={true}
                 activeClassName={"is-active"}>Home</NavLink>
        <NavLink to="/create"
                 activeClassName={"is-active"}>Add New Expense</NavLink>
        <NavLink to="/edit"
                 activeClassName={"is-active"}>Exit Expense</NavLink>
        <NavLink to="/help"
                 activeClassName={"is-active"}>Get Help</NavLink>
    </div>);


export default Header;