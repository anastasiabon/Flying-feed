import React from 'react'
import Feed from './feed'
import Admin from './admin'
import { Switch, Route } from 'react-router-dom'

const Error404 = () => (<h1>Page not found</h1>)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Feed}/>
      <Route path='/admin' component={Admin}/>
      <Route path='*' exact={true} component={Error404} />
    </Switch>
  </main>
)

export default Main