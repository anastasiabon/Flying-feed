import React from 'react'
import PropTypes from 'prop-types'
import {connect, Provider} from 'react-redux'
import store from './store'
import injectSheet from 'react-jss'
import Button from './../common/Button'
import Input from './../common/InputField'
import Dropdown from './../common/Dropdown'

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
  headline: {
    marginBottom: 40,
  },
  input: {
    width: '50%',
    '&:last-child': {
      width: '100%',
    },
  },
}

const change = (value, id, site) => ({type: 'CHANGE_VALUE', value: {value, id, site}, reducer: 'appReducer'})
const submit = () => ({type: 'SUBMIT', reducer: 'appReducer'})
const select = value => ({type: 'SELECT', value})
const addSite = () => ({type: 'ADD_SITE'})

const mapStateToProps = state => ({state});
const mapDispatchToProps = dispatch => ({
  onChange: (value, id, site) => dispatch(change(value, id, site)),
  onSubmit: () => dispatch(submit()),
  onSelect: value => dispatch(select(value)),
  onAddSite: value => dispatch(addSite()),
})

let Admin = ({state, classes, onChange, onSubmit, onSelect, onAddSite}) => {
  const { data, selected, value, siteIsAdding, isChanged } = state
  const currentSite = selected || data[0]

  return (
    <div className='layout'>
      <h1 className={classes.headline}>Choose feed source to edit or create a new one</h1>
      <Dropdown
        options={data}
        selected={siteIsAdding ? value.parsedSite : currentSite.parsedSite}
        onSelect={onSelect}
        addSite={onAddSite}
      />
      <div className={classes.fields}>
        <Input
          className={classes.input}
          id='parsedSite'
          label='Site for parsing'
          value={siteIsAdding ? value.parsedSite : currentSite.parsedSite}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id, currentSite)}}
        />
        <Input
          className={classes.input}
          id='containerSelector'
          label='Container selector'
          value={siteIsAdding ? value.containerSelector : currentSite.containerSelector}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id, currentSite)}}
        />
        <Input
          className={classes.input}
          id='bodySelector'
          label='Meta selector'
          value={siteIsAdding ? value.bodySelector : currentSite.bodySelector}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id, currentSite)}}
        />
        <Input
          className={classes.input}
          id='metaSelector'
          label='Site for parsing'
          value={siteIsAdding ? value.metaSelector : currentSite.metaSelector}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id, currentSite)}}
        />
        <Input
          className={classes.input}
          id='baseEncoding'
          label='Base encoding'
          value={siteIsAdding ? value.baseEncoding : currentSite.baseEncoding}
          type='text'
          placeholder='Fill in the field'
          onChange={(e) => {onChange(e.target.value, e.target.id, currentSite)}}
        />
      </div>
      <Button
        text='Submit'
        className={classes.btn}
        onClick={onSubmit}
        disabled={!isChanged}
      />
    </div>
  )
}

Admin = connect(mapStateToProps, mapDispatchToProps)(Admin)
Admin = injectSheet(styles)(Admin)
const Page = () => <Provider store={store}><Admin/></Provider>

export default Page
