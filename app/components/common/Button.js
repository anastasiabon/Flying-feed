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
		},
	},
	disabled: {
		backgroundColor: '#dcdcdc',
		cursor: 'not-allowed',

		'&:hover': {
			backgroundColor: '#dcdcdc',
		},
	},
}

const Button = ({classes, className, text, onClick, disabled}) => {
	return (
			<button
				className={classJoiner(
					className,
					classes.button,
          disabled && classes.disabled
				)}
				onClick={onClick}
				disabled={disabled}
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
	disabled: PropTypes.bool,
}

export default injectSheet(styles)(Button)