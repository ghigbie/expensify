import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//Routes
import ExpenseDashboardPage from './../Routes/ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from './../Routes/AddExpensePage/AddExpensePage';
import EditExpensePage from './../Routes/EditExpensePage/EditExpensePage';
import HelpPage from './../Routes/HelpPage/HelpPage';
import NotFoundPage from './../NotFoundPage/NotFoundPage';


class ExpensifyApp extends Component{
    render(){
        return(
            <div>
                <h1>Expensify App</h1>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} />
                        <Route path="/create" component={AddExpensePage} />
                        <Route path="/edit" component={EditExpensePage} />
                        <Route path="/help" component={HelpPage} />
                        <route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
        
    }
}

export default ExpensifyApp;