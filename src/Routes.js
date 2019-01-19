import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route exact path="/form" component={ Form }/>   
  </Switch>
)

export default Routes;