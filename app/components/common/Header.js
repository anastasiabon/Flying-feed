import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'

const styles = {
	root: {
		backgroundColor: '#fff',
		padding: [20]
	},
	navList: {
		display: 'flex',
		justifyContent: 'flex-end',
		listStyle: 'none',
		margin: 0,
		paddingLeft: 0,
	},
	navLink: {
		'& + &':{
			marginLeft: 20,
		},
	}
}

const Header = ({classes}) => {
	return (
		<header className={classes.root}>
			<nav>
				<ul className={classes.navList}>
					<li className={classes.navLink}><Link to='/'>Main page</Link></li>
					<li className={classes.navLink}><Link to='/admin'>Admin tool</Link></li>
				</ul>
			</nav>
		</header>
	)
}

Header.PropTypes = {
	classes: PropTypes.any,
}

export default injectSheet(styles)(Header)