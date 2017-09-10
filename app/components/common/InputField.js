import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classJoiner from '../../utils/classJoiner'

const styles = {
	root: {
		display: 'block',
		width: '100%',
		marginBottom: 20,
	},
	label: {
		display: 'block',
		fontSize: 12,
	},
	input: {
		display: 'block',
		width: '100%',
		padding: [5, 0],
		border: 'none',
		borderBottom: '1px solid #ccc',
		outline: 'none',
	},
}

const InputField = ({
	classes,
	className,
	id,
	label,
	type,
	placeholder,
	onChange,
}) => {
	return (
		<div
			className={classJoiner(
				className,
				classes.root,
			)}
		>
			<label htmlFor={id} className={classes.label}>{label}</label>
			<input
				className={classes.input}
				type={type}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
		)
}

InputField.PropTypes = {
	classes: PropTypes.any,
	className: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
}

export default injectSheet(styles)(InputField)