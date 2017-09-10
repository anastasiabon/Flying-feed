import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {}

let Header = ({classes}) => {
	return (
		<header></header>
	)
}

Header.PropTypes = {
	classes: PropTypes.any,
}

export default injectSheet(styles)(Header)