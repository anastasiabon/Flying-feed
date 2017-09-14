import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Button from 'components/common/Button'
import Checkbox from 'components/common/Checkbox'
import classJoiner from 'utils/classJoiner'

const styles = {
  checkbox: {
    marginBottom: 15,
  },
  listWrapper: {
    maxHeight: 235,
    marginBottom: 20,
    overflowY: 'scroll',
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    '-webkit-column-count': 4,
    '-moz-column-count': 4,
    columnCount: 4,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',

    '& button:first-child': {
      marginRight: 20,
    },
  },
}

const change = value => ({type: 'TOGGLE_CHECKBOX', value, reducer: 'menuReducer'})

const mapStateToProps = ({menuReducer}) => ({state: menuReducer})
const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(change(value))
})

let FeedSettings = ({classes, className, sources, onChange, onCancel}) => {
  return (
    <div
      className={classJoiner(
        className,
        classes.root,
      )}>
      <h3>Choose what you want to see in your feed:</h3>
      <div className={classes.listWrapper}>
        <ul className={classes.list}>
          {
            sources.map((item, i) => (
              <li key={i}>
                <Checkbox
                  label={item.name}
                  id={item.name}
                  checked={item.added}
                  className={classes.checkbox}
                  onChange={() => onChange(item.name)}
                />
              </li>
            ))
          }
        </ul>
      </div>
      <div className={classes.buttons}>
        <Button text='Apply' />
        <Button text='Cancel' onClick={onCancel} />
      </div>
    </div>
  )
}

FeedSettings.PropTypes = {
  classes: PropTypes.any,
  className: PropTypes.string,
  sources: PropTypes.array,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
}

FeedSettings = connect(mapStateToProps, mapDispatchToProps)(FeedSettings)

export default injectSheet(styles)(FeedSettings)