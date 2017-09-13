import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {}

const Checkbox = ({classes, id, name, label, checked, onChange}) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

Checkbox.PropTypes = {
  classes: PropTypes.any,
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

export default injectSheet(styles)(Checkbox)