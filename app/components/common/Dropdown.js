import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classJoiner from '../../utils/classJoiner'

const styles = {
	root: {
		position: 'relative',
		height: 27,
		borderBottom: '1px solid #ccc',
		cursor: 'pointer',
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
  selectedOption: {
		outline: '1px solid #1c95a9',
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
		options: PropTypes.array,
		selected: PropTypes.string,
    onSelect: PropTypes.func,
    addSite: PropTypes.func,
	}
	constructor(props) {
    super(props)
    this.state = {
    	listIsOpened: false,
    }

    this.toggleList = this.toggleList.bind(this)
  }

  toggleList() {
  	this.setState({listIsOpened: !this.state.listIsOpened})
  }

	render() {
		const {classes, options, selected, onSelect} = this.props
		const {listIsOpened} = this.state

		return (
			<div className={classes.root}>
				<div onClick={this.toggleList} >
					<span>{this.props.selected}</span>
					<button className={classes.btn}>+</button>
				</div>
				{
					listIsOpened && (
							<div className={classes.list}>
								{
									this.props.options.map((item, i) => {
										return (
												<div
													className={classJoiner(
														classes.option,
														this.props.selected === item.parsedSite && classes.selectedOption
													)}
													onClick={() => this.props.onSelect(item)}
													key={i}
												>
													{item.parsedSite}
												</div>
											)
									})
								}
								<div
									className={classJoiner(
										classes.option,
										classes.optionNew,
										)}
									onClick={this.props.addSite}
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