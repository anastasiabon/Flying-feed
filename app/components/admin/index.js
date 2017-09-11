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
  },
  input: {
    width: '50%',
    '&:last-child': {
      width: '100%',
    },
  },
}

const fields = [
  {
    id: 'parsedSite',
    label: 'Site for parsing',
  },
  {
    id: 'containerSelector',
    label: 'Container selector',
  },
  {
    id: 'bodySelector',
    label: 'Meta selector',
  },
  {
    id: 'metaSelector',
    label: 'Site for parsing',
  },
  {
    id: 'baseEncoding',
    label: 'Base encoding',
  },
]
const options = ['pikabu', 'dva4', 'lenta.ru']

const change = (value, id) => ({type: 'CHANGE_VALUE', value: {value, id}, reducer: 'appReducer'})
const submit = () => ({type: 'SUBMIT', reducer: 'appReducer'})
const mapDispatchToProps = dispatch => ({
  onChange: (value, id) => dispatch(change(value, id)),
  onSubmit: () => dispatch(submit()),
})

let Admin = ({classes, onChange, onSubmit}) => {
  return (
    <div className='layout'>
      <div className={classes.fields}>
        {
          fields.map((item, i) => (
            <Input
              className={classes.input}
              key={i}
              id={item.id}
              label={item.label}
              type='text'
              placeholder='Fill in the field'
              onChange={(e) => {onChange(e.target.value, e.target.id)}}
            />
          ))
        }
      </div>
      <Dropdown
        defaultValue='bash.org'
        options={options}
      />
      <Button
        text='Submit'
        className={classes.btn}
        onClick={onSubmit}
      />
    </div>
  )
}

Admin = connect(null, mapDispatchToProps)(Admin)
Admin = injectSheet(styles)(Admin)
const Page = () => <Provider store={store}><Admin/></Provider>

export default Page