import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  root: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#1c95a9',
    cursor: 'pointer',
    transition: 'background-color .2s',

    '&:hover': {
      color: '#167f90',
    },
  },
}

const ButtonIcon = ({classes, icon, onClick}) => {
  return (
    <button
      className={classes.root}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

ButtonIcon.PropTypes = {
  classes: PropTypes.any,
  icon: PropTypes.any,
  onClick: PropTypes.func,
}

export default injectSheet(styles)(ButtonIcon)