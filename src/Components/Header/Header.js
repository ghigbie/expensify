import React, { Component } from 'react';
import { Link } from  'react-router-dom';

class Header extends Component{
    reder(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/create">Home</Link>
                <Link to="/edit">Home</Link>
                <Link to="/help">Home</Link>
            </div>
        );
    }
}

export default Header;