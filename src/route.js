import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Favorites from './component/Favorites/Favorites';
import Newsletter from './component/Newsletter/Newsletter';
import Results from './component/Results/Results';
import Login from './component/Login/Login';
import SuperFavorites from './component/SuperFavorites/SuperFavorites';
import FavoriteDisplay from './component/FavoriteDisplay/FavoriteDisplay';
//double check to make sure you need 'connect' imported in or if I'm still okay with were I'm at?

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/form' component={Form} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/newsletter' component={Newsletter} />
        <Route path='/results' component={Results} />
        <Route path='/login' component={Login} exact />
        <Route path='/superfavorites' component={SuperFavorites} />
        <Route path='/favoritedisplay' component={FavoriteDisplay} />
    </Switch>
)
