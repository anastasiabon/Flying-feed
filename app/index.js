import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import css from './static/index.css'
import normalize from './styles/normalize.css'

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
)