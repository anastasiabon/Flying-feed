import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classJoiner from '../../utils/classJoiner'

const styles = {
	root: {
		position: 'relative',
		height: 27,
		borderBottom: '1px solid #ccc',
	},
	list: {
		position: 'absolute',
		top: '100%',
		left: 0,
		width: '100%',
		border: '1px solid #ccc',
		backgroundColor: '#fff',
	},
	option: {
		padding: [5, 10],
		transition: 'background-color .2s',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#ccc',
		}
	},
	optionNew: {
		fontStyle: 'italic',
	},
	btn: {
		position: 'absolute',
		right: 0,
		cursor: 'pointer',
	},
}

class Dropdown extends React.PureComponent {
	static PropTypes = {
		classes: PropTypes.any,
		defaultValue: PropTypes.string,
		options: PropTypes.array,
	}
	constructor(props) {
    super(props)
    this.state = {
    	selected: '',
    	listIsOpened: false,
    }

    this.onSelect = this.onSelect.bind(this)
    this.toggleList = this.toggleList.bind(this)
  }

  onSelect(source) {
  	this.setState({selected: source})
  }

  toggleList() {
  	this.setState({listIsOpened: !this.state.listIsOpened})
  }

	render() {
		const {classes, defaultValue, options} = this.props
		const {selected, listIsOpened} = this.state
		return (
			<div className={classes.root}>
				<div>
					<span>{selected || this.props.defaultValue}</span>
					<button onClick={this.toggleList} className={classes.btn}>+</button>
				</div>
				{
					listIsOpened && (
							<div className={classes.list}>
								{
									this.props.options.map((item, i) => {
										return (
												<div
													className={classes.option}
													onClick={() => this.onSelect(item)}
													key={i}
												>
													{item}
												</div>
											)
									})
								}
								<div
									className={classJoiner(
										classes.option,
										classes.optionNew,
										)}
									onClick={() => this.onSelect(item)}
								>
									Add a new one
								</div>
							</div>
						)
				}	
			</div>
		)
	}
}



export default injectSheet(styles)(Dropdown)