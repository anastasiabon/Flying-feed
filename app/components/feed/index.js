import React from 'react'
import PropTypes from 'prop-types'
import {Provider, connect} from 'react-redux'
import store from './store'
import injectSheet from 'react-jss'
import List from './components/List'
import Menu from './components/Menu'
import Spinner from 'components/common/Spinner'

const styles = {
	feedHeader: {
		// textAlign: 'center',
	},
	initLoad: {
		width: '100%',
	}
}

const load = (value) => ({type: 'LOAD_ENTRIES', reducer: 'appReducer'});
const mapStateToProps = ({appReducer}) => appReducer
const mapDispatchToProps = dispatch => ({
	onLoad: () => dispatch(load())
});

let Feed = class extends React.PureComponent {
	constructor(props) {
    super(props)
    this.loadEntries = this.loadEntries.bind(this)
  }

	componentDidMount() {
		document.addEventListener('scroll', this.loadEntries, false)
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.loadEntries, false)
	}

	loadEntries() {
		const elem = this.node.getBoundingClientRect()
    const inView = elem.bottom < document.documentElement.clientHeight

    if (this.props.noEntries || !this.props.dataLoaded) return

    if (inView) {
    	this.props.onLoad()
    }
	}
	render() {
		const {dataLoaded, classes, onLoad} = this.props
		return (
			<div className='layout'>
				<div className={classes.feedHeader}>
					<Menu />
				</div>
				<div>
					<List />
					<div className={classes.initLoad} ref={node => {this.node = node}} />
					{ !dataLoaded && <Spinner /> }
				</div>
			</div>
		)
	}
}

Feed = connect(mapStateToProps, mapDispatchToProps)(Feed)
Feed = injectSheet(styles)(Feed)
const Page = () => <Provider store={store}><Feed/></Provider>

export default Page
