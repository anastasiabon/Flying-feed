import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

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
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540.129 540.129">
				<path d="M28.074 204.83C64.044 70.587 202.484-9.363 336.746 26.624 403.513 44.5 461.55 94.573 494.99 162.196L443.88 148.5l-4.662 17.41 69.562 18.632c.756.198 1.548.306 2.322.306 1.566 0 3.114-.414 4.52-1.225 2.07-1.206 3.582-3.15 4.194-5.473l18.633-69.562-17.392-4.645-12.235 45.66C472.75 79.71 411.623 28.017 341.41 9.215c-143.77-38.49-292.2 47.13-330.727 190.953-6.14 22.917-9.27 46.41-9.27 69.886h18c.02-21.89 2.918-43.854 8.66-65.223zM520.714 270.054c0 21.89-2.916 43.836-8.64 65.223-35.97 134.246-174.41 214.195-308.674 178.208-66.766-17.877-124.803-67.95-158.245-135.572l51.113 13.696 4.663-17.41-69.56-18.633c-2.305-.576-4.754-.306-6.824.918-2.07 1.206-3.583 3.15-4.195 5.473L1.72 431.52l17.39 4.644 12.22-45.65c36.073 69.89 97.2 121.578 167.41 140.38 23.313 6.247 46.735 9.235 69.814 9.235 119.232 0 228.634-79.698 260.894-200.19 6.14-22.917 9.27-46.41 9.27-69.886h-18.002z"/>
			</svg>
		</div>
	)
}

Spinner.PropTypes = {
	classes: PropTypes.any,
}

export default injectSheet(styles)(Spinner)