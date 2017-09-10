import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouter from 'react-router'
import { Router, Route, IndexRoute, browserHistory, Switch } from 'react-router'
import App from './components/feed'
import Admin from './components/feed/components/SourceSettings'
import css from './index.css'
import normalize from './styles/normalize.css'

// const Router = ReactRouter.BrowserRouter
// const Route = ReactRouter.Route
// const Switch = ReactRouter.Switch

const Index = () => {
	<Router>
		<div className='container'>
			<Switch>
				<Route exact path='/' component={App} />
				<Route exact path='/admin' component={Admin} />
				<Route render={() => <p>Not Found</p>} />
			</Switch>
		</div>
	</Router>
}

ReactDOM.render(<App />, document.getElementById('app'))