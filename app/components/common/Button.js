import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classJoiner from '../../utils/classJoiner'

const styles = {
	button: {
		display: 'block',
		padding: [6, 20],
		backgroundColor: '#1c95a9',
		border: 'none',
		borderRadius: 1,
		outline: 'none',
		fontSize: 16,
		color: '#fff',
		textTransform: 'uppercase',
		letterSpacing: 0.3,
		cursor: 'pointer',
		transition: 'background-color .2s',

		'&:hover': {
			backgroundColor: '#167f90',
		}
	},
}

const Button = ({classes, className, text, onClick}) => {
	return (
			<button
				className={classJoiner(
					className,
					classes.button,
				)}
				onClick={onClick}
			>
				{text}
			</button>
		)
}

Button.PropTypes = {
	classes: PropTypes.any,
	text: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func,
}

export default injectSheet(styles)(Button)