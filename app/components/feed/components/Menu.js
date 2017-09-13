import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import FeedSettings from './FeedSettings'
import SettingsIcon from '../../common/icons/settings'
import ButtonIcon from '../../common/ButtonIcon'

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
}

const mapStateToProps = ({menuReducer}) => ({state: menuReducer})

let Menu = ({classes, state}) => {
  return (
    <div>
      <nav className={classes.nav}>
        There will menu to set the feed...
        <ButtonIcon icon={<SettingsIcon />} />
      </nav>
      <FeedSettings sources={state.sources} />
    </div>
  )
}

Menu.PropTypes = {
  classes: PropTypes.any,
}

Menu = connect(mapStateToProps, null)(Menu)

export default injectSheet(styles)(Menu)