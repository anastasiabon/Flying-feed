import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import FeedSettings from './FeedSettings'
import SettingsIcon from './../../common/icons/settings'
import ButtonIcon from './../../common/ButtonIcon'

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: '1px solid #ccc',
    color: '#ccc',

    '& .svgicon--settings': {
      width: 25,
      height: 25,
    },
  },
  block: {
    overflow: 'hidden',
  },
  settings: {
    animationName: 'grow',
    animationDuration: '.3s',
  },
  '@keyframes grow': {
    'from': {
      opacity: 0,
      transform: 'translateY(-100%)',
    },
    'to': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}

const mapStateToProps = ({menuReducer}) => ({state: menuReducer})

let Menu = class extends React.PureComponent {
  static PropTypes = {
    classes: PropTypes.any,
  }

  constructor(props) {
    super(props)
    this.state = {
      settingsIsOpened: false,
    }
    this.toggleSettings = this.toggleSettings.bind(this)
  }

  toggleSettings() {
    this.setState({settingsIsOpened: !this.state.settingsIsOpened})
  }

  render() {
    const {state, classes} = this.props
    const {settingsIsOpened} = this.state
    return (
      <div>
        <nav className={classes.nav}>
          There will menu to set the feed...
          <ButtonIcon icon={<SettingsIcon />} onClick={this.toggleSettings} />
        </nav>
        <div className={classes.block}>
          {
            settingsIsOpened && (
              <FeedSettings
                sources={state.sources}
                className={classes.settings}
                onCancel={this.toggleSettings}
              />
            )
          }
        </div>
      </div>
    )
  }
}

Menu = connect(mapStateToProps, null)(Menu)

export default injectSheet(styles)(Menu)