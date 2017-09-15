import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
// import tick from './svg/tick.svg'

const styles = {
  input: {
    display: 'none',
    '& + $label::before': {
      content: '""',
      display: 'inline-block',
      width: 15,
      height: 15,
      marginRight: 8,
      borderRadius: 4,
      border: '1px solid #ccc',
      cursor: 'pointer',
      verticalAlign: 'middle',
    },
    '&:checked + $label::before': {
      // background: `url(${tick}) no-repeat`,
    },
  },
  label: {},
}

const Checkbox = ({classes, className, id, name, label, checked, onChange}) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className={classes.input}
      />
      <label htmlFor={id} className={classes.label}>{label}</label>
    </div>
  )
}

Checkbox.PropTypes = {
  classes: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default injectSheet(styles)(Checkbox)