import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cont from './pages/contact/Cont';
import MainPage from './pages/MainPage/MainPage';
import SourcesPage from './pages/SourcesPage/SourcesPage';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path='/app' component={SourcesPage}/>
            <Route path='/cont' component={Cont}/>
        </Switch>
        
        </BrowserRouter>
    );
};

export default Routes;