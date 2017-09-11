import React from 'react'
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import store from './store'
import injectSheet from 'react-jss'
import Button from '../common/Button'
import Input from '../common/InputField'
import Dropdown from '../common/Dropdown'

const styles = {
  btn: {
    width: '100%',
    marginTop: 30
  },
  fields: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  input: {
    width: '50%',
    '&:last-child': {
      width: '100%',
    },
  },
}

const change = (value, id) => ({type: 'CHANGE_VALUE', value: {value, id}, reducer: 'appReducer'})
const submit = () => ({type: 'SUBMIT', reducer: 'appReducer'})
const select = value => ({type: 'SELECT', value})
const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({
  onChange: (value, id) => dispatch(change(value, id)),
  onSubmit: () => dispatch(submit()),
  onSelect: value => dispatch(select(value)),
})

let Admin = ({state, classes, onChange, onSubmit, onSelect}) => {
  const { data, selected } = state
  const currentSite = selected || data[0]

  return (
    <div className='layout'>
      <h1>Choose feed source to edit or create a new one</h1>
      <Dropdown
        options={data}
        selected={currentSite.parsedSite}
        onSelect={onSelect}
      />
      <div className={classes.fields}>
        <Input
          className={classes.input}
          id='parsedSite'
          label='Site for parsing'
          value={currentSite.parsedSite}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id)}}
        />
        <Input
          className={classes.input}
          id='containerSelector'
          label='Container selector'
          value={currentSite.containerSelector}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id)}}
        />
        <Input
          className={classes.input}
          id='bodySelector'
          label='Meta selector'
          value={currentSite.bodySelector}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id)}}
        />
        <Input
          className={classes.input}
          id='metaSelector'
          label='Site for parsing'
          value={currentSite.metaSelector}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id)}}
        />
        <Input
          className={classes.input}
          id='baseEncoding'
          label='Base encoding'
          value={currentSite.baseEncoding}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id)}}
        />
      </div>
      <Button
        text='Submit'
        className={classes.btn}
        onClick={onSubmit}
      />
    </div>
  )
}

Admin = connect(mapStateToProps, mapDispatchToProps)(Admin)
Admin = injectSheet(styles)(Admin)
const Page = () => <Provider store={store}><Admin/></Provider>

export default Page
