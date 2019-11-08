import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { IndexComponent } from '../IndexComponent';
const AppRouting = () =>(
    <Router>
        <Switch>
            <Route path="/" component = { IndexComponent }/>
        </Switch>
    </Router>
);

export default AppRouting;

