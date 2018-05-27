import React from 'react';
import { Link } from  'react-router-dom';

const Header = () =>
    (<div>
        <Link to="/">Home</Link>
        <Link to="/create">Add New Expense</Link>
        <Link to="/edit">Exit Expense</Link>
        <Link to="/help">Get Help</Link>
    </div>);


export default Header;