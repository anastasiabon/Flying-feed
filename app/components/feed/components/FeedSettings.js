import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Button from '../../common/Button'
import Checkbox from '../../common/Checkbox'

const styles = {}

const change = value => ({type: 'TOGGLE_CHECKBOX', value, reducer: 'menuReducer'})

const mapStateToProps = ({menuReducer}) => ({state: menuReducer})
const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(change(value))
})

let FeedSettings = ({classes, sources, onChange}) => {
  return (
    <div className={classes.root}>
      <h3>Choose what you want to see in your feed:</h3>
      <div className={classes.form}>
        {
          sources.map((item, i) => (
            <Checkbox
              key={i}
              label={item.name}
              id={item.name}
              checked={item.added}
              onChange={() => onChange(item.name)}
            />
          ))
        }
      </div>
      <Button text='Apply' />
    </div>
  )
}

FeedSettings.PropTypes = {
  classes: PropTypes.any,
  sources: PropTypes.array,
  onChange: PropTypes.func,
}

FeedSettings = connect(mapStateToProps, mapDispatchToProps)(FeedSettings)

export default injectSheet(styles)(FeedSettings)