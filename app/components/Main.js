import React from 'react'
import Feed from './feed'
import Admin from './admin'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feed}/>
      <Route path='/admin' component={Admin}/>
    </Switch>
  </main>
)

export default Main