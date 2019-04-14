import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import HomePage from '../components/homepage/homepage';
import LoginPage from '../components/login/login';

export default()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {HomePage}></Route>
            <Route exact path='/login' component = {LoginPage}></Route>
        </Switch>
    </BrowserRouter>
)