import React from 'react';
import { Link } from  'react-router-dom';

const Header = () =>
    (<div>
        <Link to="/">Home</Link>
        <Link to="/create">Home</Link>
        <Link to="/edit">Home</Link>
        <Link to="/help">Home</Link>
    </div>);


export default Header;