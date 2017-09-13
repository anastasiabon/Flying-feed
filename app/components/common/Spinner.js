import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Icon from './icons/spinner'

const styles = {
	'@keyframes svgrotate': {
		'100%': {
			transform: 'rotate(360deg)',
		},
	},
	spinner: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: [30, 0],

		'& svg': {
			width: 40,
			height: 40,
			animation: 'svgrotate 1s linear infinite',
		}
	}
}

const Spinner = ({classes}) => {
	return (
		<div className={classes.spinner}>
			<Icon />
		</div>
	)
}

Spinner.PropTypes = {
	classes: PropTypes.any,
}

export default injectSheet(styles)(Spinner)