import React, { Component } from 'react';

import AppRouter from './../../Routers/AppRouter';

class ExpensifyApp extends Component{
    render(){
        return(
            <div>
                <h1>Expensify App</h1>
                <AppRouter />
            </div>
        );
        
    }
}

export default ExpensifyApp;