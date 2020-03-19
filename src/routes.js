import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Inventory from './Components/Inventory';
import Cart from './Components/Cart/Cart';


export default (
    <Switch>
    <Route component={Inventory} exact path='/'/>
    <Route component={Cart} path='/cart'/>
    </Switch>
)