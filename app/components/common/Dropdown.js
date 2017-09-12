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
		boxShadow: '0 5px 18px 0 rgba(0,0,0,.2)',
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
    this.handleDocumentClick = this.handleDocumentClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false)
  }

  toggleList() {
  	this.setState({listIsOpened: !this.state.listIsOpened})
  }

  handleDocumentClick(event) {
    if (!this.node || !event.target || !this.state.listIsOpened) return
    if (this.node.contains(event.target)) return
    this.toggleList()
	}

	render() {
		const {classes, options, selected, onSelect, addSite} = this.props
		const {listIsOpened} = this.state

		return (
			<div className={classes.root} ref={node => {this.node = node}}>
				<div onClick={this.toggleList} >
					<span>{selected}</span>
					<button className={classes.btn}>+</button>
				</div>
				{
					listIsOpened && (
							<div className={classes.list}>
								{
									options.map((item, i) => {
										return (
												<div
													className={classJoiner(
														classes.option,
														selected === item.parsedSite && classes.selectedOption
													)}
													onClick={() => onSelect(item)}
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
									onClick={addSite}
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