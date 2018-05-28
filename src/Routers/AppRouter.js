import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Header from './../Components/Header/Header';

//Routes
import ExpenseDashboardPage from './../Routes/ExpenseDashboardPage/ExpenseDashboardPage';
import AddExpensePage from './../Routes/AddExpensePage/AddExpensePage';
import EditExpensePage from './../Routes/EditExpensePage/EditExpensePage';
import HelpPage from './../Routes/HelpPage/HelpPage';
import NotFoundPage from './../Routes/NotFoundPage/NotFoundPage';


const AppRouter = () => 
    (<BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={ExpenseDashboardPage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/*" component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>);

export default AppRouter;