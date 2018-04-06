import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Favorites from './component/Favorites/Favorites';
import Newsletter from './component/Newsletter/Newsletter';
import Results from './component/Results/Results'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/form' component={Form} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/newsletter' component={Newsletter} />
        <Route path='/results' component={Results} />
    </Switch>
)
