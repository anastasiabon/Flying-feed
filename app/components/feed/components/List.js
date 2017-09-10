import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'
import Item from './Item'

const styles = {
	list: {
		padding: 20,
		border: '1px solid #ccc',
	}
}

const mapStateToProps = ({listReducer}) => ({list: listReducer.list})

let List = ({list}) => (
	<div>
		{list.map(item => (<Item entry={item} key={item.id} />))}
	</div>
)

List.PropTypes = {
	list: PropTypes.object.isRequired,
}

List = connect(mapStateToProps, null)(List)

export default injectSheet(styles)(List)