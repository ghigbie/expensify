import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Header from './../Header/Header';

//Routes
import ExpenseDashboardPage from './../../Routes/ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from './../../Routes/AddExpensePage/AddExpensePage';
import EditExpensePage from './../../Routes/EditExpensePage/EditExpensePage';
import HelpPage from './../../Routes/HelpPage/HelpPage';
import NotFoundPage from './../../Routes/NotFoundPage/NotFoundPage';


class ExpensifyApp extends Component{
    render(){
        return(
            <div>
                <h1>Expensify App</h1>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact={true} component={ExpenseDashboardPage} />
                            <Route path="/create" component={AddExpensePage} />
                            <Route path="/edit" component={EditExpensePage} />
                            <Route path="/help" component={HelpPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
        
    }
}

export default ExpensifyApp;