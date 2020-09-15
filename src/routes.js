import React from 'react'
import DashBoard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import { Switch, Route } from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route path='/form' component={Form} />
    </Switch>
)