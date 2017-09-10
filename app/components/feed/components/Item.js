import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import injectSheet from 'react-jss'

const styles = {
	item: {
		marginBottom: 20,
		border: '1px solid #ccc',

		'&:last-child': {
			marginBottom: 0,
		}
	},
	title: {
		fontSize: 16,
	},
	preview: {
		display: 'flex',
		alignItems: 'center',
		height: 40,
		padding: [0, 20],
		cursor: 'pointer',
		transition: 'background-color .3s',

		'&:hover': {
			backgroundColor: '#ccc',
		},
	},
	body: {
		'& img': {
			maxWidth: '100%'
		}
	}
}

const toggleItem = value => ({type: 'TOGGLE_ITEM', value, reducer: 'listReducer'})
const mapDispatchToProps = dispatch => ({onToggle: value => dispatch(toggleItem(value))})

let Item = ({classes, entry, onToggle}) => {
	return (
		<div className={classes.item}>
			<div className={classes.preview} onClick={() => onToggle(entry.id)}>
				<h1 className={classes.title} dangerouslySetInnerHTML={{ __html: entry.meta }}/>
				<span>{entry.site}</span>
				<span>{entry.timestamp}</span>
			</div>
			{
				!entry.isCollapsed && <div className={classes.body} dangerouslySetInnerHTML={{ __html: entry.body }} />
			}
		</div>
	)
}

Item.PropTypes = {
	entry: PropTypes.object.isRequired,
	onToggle: PropTypes.func.isRequired,
}

Item = connect(null, mapDispatchToProps)(Item)

export default injectSheet(styles)(Item)