import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import classJoiner from '../../utils/classJoiner'

const styles = {}

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
    }

    this.onSelect = this.onSelect.bind(this)
  }

  onSelect() {
  	console.log(333)
  }

	render() {
		const {classes, defaultValue, options} = this.props
		const {selected} = this.state
		console.log(this.props)
		return (
			<div>
				<div>
					<span>{selected || this.props.defaultValue}</span>
					<button>+</button>
				</div>	
				<div className={classes.list}>
					{
						this.props.options.map((item, i) => {
							return (
									<div onClick={this.onSelect} key={i}>
										{item}
									</div>
								)
						})
					}
				</div>
			</div>
		)
	}
}



export default injectSheet(styles)(Dropdown)